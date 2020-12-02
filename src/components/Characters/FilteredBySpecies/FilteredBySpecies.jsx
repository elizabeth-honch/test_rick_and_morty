import React from 'react';
import PropTypes from 'prop-types';
import './FilteredBySpecies.css';

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
}));

export const FilteredBySpecies = ({ selectedSpecies, selectSpecies }) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <h3 className="species__title">Select filter by species:</h3>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedSpecies}
        onChange={selectSpecies}
      >
        <MenuItem value="ALL">All</MenuItem>
        <MenuItem value="HUMAN">Human</MenuItem>
        <MenuItem value="HUMANOID">Humanoid</MenuItem>
        <MenuItem value="ALIEN">Alien</MenuItem>
        <MenuItem value="ROBOT">Robot</MenuItem>
        <MenuItem value="DISEASE">Disease</MenuItem>
        <MenuItem value="ANIMAL">Animal</MenuItem>
        <MenuItem value="POOPYBUTTHOLE">Poopybutthole</MenuItem>
      </Select>
    </FormControl>
  );
};

FilteredBySpecies.propTypes = {
  selectedSpecies: PropTypes.string.isRequired,
  selectSpecies: PropTypes.func.isRequired,
};
