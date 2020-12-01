import { createStore } from 'redux';

import {
  SHOW_CHARACTERS,
  ALL,
  HUMAN,
  HUMANOID,
  ALIEN,
  ROBOT,
  DISEASE,
  ANIMAL,
  POOPYBUTTHOLE,
  SHOW_EPISODE,
  SHOW_LOCATIONS,
  ALIVE,
  DEAD,
  UNKNOWN_STATUS,
  MALE,
  FEMALE,
  UNKNOWN_GENDER,
} from './variables';

const initial = [];

const initialState = {
  characters: initial,
  episodes: initial,
  locations: initial,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_CHARACTERS:
      return {
        ...state,
        characters: action.payload.characters,
      };

    case ALL:
      return {
        ...state,
        characters: action.payload.characters,
      };

    case HUMAN:
      return {
        ...state,
        characters: action.payload.characters.filter((character) => character.species === 'Human'),
      };

    case HUMANOID:
      return {
        ...state,
        characters: action.payload.characters.filter((character) => character.species === 'Humanoid'),
      };

    case ALIEN:
      return {
        ...state,
        characters: action.payload.characters.filter((character) => character.species === 'Alien'),
      };

    case ROBOT:
      return {
        ...state,
        characters: action.payload.characters.filter((character) => character.species === 'Robot'),
      };

    case DISEASE:
      return {
        ...state,
        characters: action.payload.characters.filter((character) => character.species === 'Disease'),
      };

    case ANIMAL:
      return {
        ...state,
        characters: action.payload.characters.filter((character) => character.species === 'Animal'),
      };

    case POOPYBUTTHOLE:
      return {
        ...state,
        characters: action.payload.characters.filter((character) => character.species === 'Poopybutthole'),
      };

    case ALIVE:
      return {
        ...state,
        characters: action.payload.characters.filter((character) => character.status === 'Alive'),
      };

    case DEAD:
      return {
        ...state,
        characters: action.payload.characters.filter((character) => character.status === 'Dead'),
      };

    case UNKNOWN_STATUS:
      return {
        ...state,
        characters: action.payload.characters.filter((character) => character.status === 'unknown'),
      };

    case MALE:
      return {
        ...state,
        characters: action.payload.characters.filter((character) => character.gender === 'Male'),
      };

    case FEMALE:
      return {
        ...state,
        characters: action.payload.characters.filter((character) => character.gender === 'Female'),
      };

    case UNKNOWN_GENDER:
      return {
        ...state,
        characters: action.payload.characters.filter((character) => character.gender === 'unknown'),
      };

    case SHOW_EPISODE:
      return {
        ...state,
        episodes: action.payload.episodes,
      };

    case SHOW_LOCATIONS:
      return {
        ...state,
        locations: action.payload.locations,
      };

    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);
