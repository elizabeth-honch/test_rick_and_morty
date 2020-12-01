/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Characters.css';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  return {
    position: 'absolute',
    top: '50%',
    right: '50%',
    transform: 'translate(50%,-50%)',
  }
}

const useStyles = makeStyles((theme) => ({
  popup: {
    position: 'absolute',
    width: '550px',
    fontSize: '18px',
    backgroundColor: 'white',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
  },
}));

export const Characters = ({ characters }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [popupStyle] = useState(getModalStyle);
  const [currentCharacter, setCurrentCharacter] = useState({});

  const showCard = useStyles();

  const handleOpen = (data) => {
    setShowDetail(true);
    setCurrentCharacter(data);
  };

  const handleClose = () => {
    setShowDetail(false);
  };

  return (
    <ul className="characters__card">
      {
        characters.map((character) => (
          <li
            className="card"
            key={character.id}
            role="button"
            onClick={() => handleOpen(character)}
          >
            <h3>{`Name - ${character.name}`}</h3>
            <p>{`Species - ${character.species}`}</p>
            <p>{`Status - ${character.status}`}</p>
            <p>{`Gender - ${character.gender}`}</p>
            <img src={`${character.image}`} alt="character" />
        </li>
        ))
      }
      {
        showDetail
        ? (
          <div>
            <Modal
              open={showDetail}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <div className={showCard.popup} style={popupStyle}>
                <h2>{`Name - ${currentCharacter.name}`}</h2>
                <p>{`Species - ${currentCharacter.species}`}</p>
                <p>{`Status - ${currentCharacter.status}`}</p>
                <p>{`Gender - ${currentCharacter.gender}`}</p>
                <p>{`Location name - ${currentCharacter.location.name}`}</p>
                <p>{`Location url - ${currentCharacter.location.url}`}</p>
                <p>{`Origin name - ${currentCharacter.origin.name}`}</p>
                <p>{`Origin url - ${currentCharacter.origin.url}`}</p>
                <img src={`${currentCharacter.image}`} alt="character" />
              </div>
            </Modal>
          </div>
        )
        : ''
      }
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
