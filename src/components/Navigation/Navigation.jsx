import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Navigation.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { FilteredBySpecies } from '../Characters/FilteredBySpecies/FilteredBySpecies';
import { FilteredByStatus } from '../Characters/FilteredByStatus/FilteredByStatus';
import { FilteredByGender } from '../Characters/FilteredByGender/FilteredByGender';
import { Characters } from '../Characters/Characters';
import { Pagination } from '../Pagination/Pagination';
import { Episodes } from '../Episodes/Episodes';
import { Locations } from '../Locations/Locations';
import { WatchList } from '../WatchList/WatchList';

import { getCharacter, getEpisode, getLocation } from '../../api/navigation';
import {
  showCharacters,
  showEpisodes,
  showLocations,
  all,
  human,
  humanoid,
  alien,
  robot,
  disease,
  animal,
  poopybutthole,
  alive,
  dead,
  unknownStatus,
  male,
  female,
  unknownGender,
} from '../../actionCreators';

import {
  ALL,
  HUMAN,
  HUMANOID,
  ALIEN,
  ROBOT,
  DISEASE,
  ANIMAL,
  POOPYBUTTHOLE,
  ALIVE,
  DEAD,
  UNKNOWN_STATUS,
  MALE,
  FEMALE,
  UNKNOWN_GENDER,
} from '../../variables';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  title: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
    '&:hover': {
      cursor: 'pointer',
      color: '#cfd8dc',
    },
  },
  selected: {
    color: '#cfd8dc',
  },
}));

export const Navigation = () => {
  const classes = useStyles();

  const [showCharacter, setShowCharacter] = useState(false);
  const [showEpisode, setShowEpisode] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showWatchList, setShowWatchList] = useState(true);

  const [selectedSpecies, setSelectedSpecies] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
  const currentPage = 1;

  const characters = useSelector((state) => state.characters);
  const episodes = useSelector((state) => state.episodes);
  const locations = useSelector((state) => state.locations);
  const dispatch = useDispatch();

  const LENGTH_OF_CHARACTERS = 34;

  // Paginate for Characters
  const paginateForCharacters = (pageNumber) => {
    setSelectedStatus('all');
    setSelectedSpecies('all');
    setSelectedGender('all');
    getCharacter(pageNumber)
      .then((data) => {
        dispatch(showCharacters(data));
      });
  };

  // Paginate for Episode
  const paginateForEpisodes = (pageNumber) => {
    getEpisode(pageNumber)
      .then((data) => {
        dispatch(showEpisodes(data));
      });
  };

  const paginateForLocations = (pageNumber) => {
    getLocation(pageNumber)
      .then((data) => {
        dispatch(showLocations(data));
      });
  };

  // Filter fields for Characters
  const selectSpecies = ({ target }) => {
    setSelectedSpecies(target.value);
    setSelectedStatus(selectedStatus);
    setSelectedGender(selectedGender);
    getCharacter(currentPage)
      .then((data) => {
        switch (target.value) {
          case ALL:
            dispatch(all(data));
            break;

          case HUMAN:
            dispatch(human(data));
            break;

          case HUMANOID:
            dispatch(humanoid(data));
            break;

          case ALIEN:
            dispatch(alien(data));
            break;

          case ROBOT:
            dispatch(robot(data));
            break;

          case DISEASE:
            dispatch(disease(data));
            break;

          case ANIMAL:
            dispatch(animal(data));
            break;

          case POOPYBUTTHOLE:
            dispatch(poopybutthole(data));
            break;

          default:
            dispatch(all(data));
            break;
        }
      });
  };

  const selectStatus = ({ target }) => {
    setSelectedStatus(target.value);
    setSelectedSpecies(selectedSpecies);
    setSelectedGender(selectedGender);
    getCharacter(currentPage)
      .then((data) => {
        switch (target.value) {
          case ALL:
            dispatch(all(data));
            break;

          case ALIVE:
            dispatch(alive(data));
            break;

          case DEAD:
            dispatch(dead(data));
            break;

          case UNKNOWN_STATUS:
            dispatch(unknownStatus(data));
            break;

          default:
            dispatch(all(data));
            break;
        }
      });
  };

  const selectGender = ({ target }) => {
    setSelectedGender(target.value);
    setSelectedSpecies(selectedSpecies);
    setSelectedStatus(selectedStatus);
    getCharacter(currentPage)
      .then((data) => {
        switch (target.value) {
          case ALL:
            dispatch(all(data));
            break;

          case MALE:
            dispatch(male(data));
            break;

          case FEMALE:
            dispatch(female(data));
            break;

          case UNKNOWN_GENDER:
            dispatch(unknownGender(data));
            break;

          default:
            dispatch(all(data));
            break;
        }
      });
  };

  const listOfCharacters = () => {
    setShowCharacter(true);
    setShowEpisode(false);
    setShowLocation(false);
    setShowWatchList(false);
    getCharacter(currentPage)
      .then((data) => {
        dispatch(showCharacters(data));
      });
  };

  const tableEpisode = () => {
    setShowEpisode(true);
    setShowCharacter(false);
    setShowLocation(false);
    setShowWatchList(false);
    getEpisode(currentPage)
      .then((data) => {
        dispatch(showEpisodes(data));
      });
  };

  const tableLocation = () => {
    setShowLocation(true);
    setShowEpisode(false);
    setShowCharacter(false);
    setShowWatchList(false);
    getLocation(currentPage)
      .then((data) => {
        dispatch(showLocations(data));
      });
  };

  const watchList = () => {
    setShowWatchList(true);
    setShowLocation(false);
    setShowEpisode(false);
    setShowCharacter(false);
  };

  return (
    <>
      <nav className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={`${classes.title} ${showCharacter ? classes.selected : ''}`} onClick={listOfCharacters}>
              Characters
            </Typography>
            <Typography variant="h6" className={`${classes.title} ${showEpisode ? classes.selected : ''}`} onClick={tableEpisode}>
              Episodes
            </Typography>
            <Typography variant="h6" className={`${classes.title} ${showLocation ? classes.selected : ''}`} onClick={tableLocation}>
              Locations
            </Typography>
            <Typography variant="h6" className={`${classes.title} ${showWatchList ? classes.selected : ''}`} onClick={watchList}>
              My watch list
            </Typography>
          </Toolbar>
        </AppBar>
      </nav>
      {
        showCharacter && (
          <div className="characters">
            <div className="characters__filter">
              <FilteredBySpecies selectedSpecies={selectedSpecies} selectSpecies={selectSpecies} />
              <FilteredByStatus selectedStatus={selectedStatus} selectStatus={selectStatus} />
              <FilteredByGender selectedGender={selectedGender} selectGender={selectGender} />
            </div>
            <Characters characters={characters} />

            <Pagination pages={LENGTH_OF_CHARACTERS} paginate={paginateForCharacters} />
          </div>
        )
      }
      {
        showEpisode && (
          <Episodes episodes={episodes} paginate={paginateForEpisodes} />
        )
      }
      {
        showLocation && (
          <Locations
            locations={locations}
            paginate={paginateForLocations}
          />
        )
      }
      {
        showWatchList && <WatchList />
      }
    </>
  );
};
