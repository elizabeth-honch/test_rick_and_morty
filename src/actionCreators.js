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

export function showCharacters(data) {
  return {
    type: SHOW_CHARACTERS,
    payload: { characters: data },
  };
}

export function showEpisodes(data) {
  return {
    type: SHOW_EPISODE,
    payload: { episodes: data },
  };
}

export function showLocations(data) {
  return {
    type: SHOW_LOCATIONS,
    payload: { locations: data },
  };
}

// Select species
export function all(data) {
  return {
    type: ALL,
    payload: { characters: data },
  };
}

export function human(data) {
  return {
    type: HUMAN,
    payload: { characters: data },
  };
}

export function humanoid(data) {
  return {
    type: HUMANOID,
    payload: { characters: data },
  };
}

export function alien(data) {
  return {
    type: ALIEN,
    payload: { characters: data },
  };
}

export function robot(data) {
  return {
    type: ROBOT,
    payload: { characters: data },
  };
}

export function disease(data) {
  return {
    type: DISEASE,
    payload: { characters: data },
  };
}

export function animal(data) {
  return {
    type: ANIMAL,
    payload: { characters: data },
  };
}

export function poopybutthole(data) {
  return {
    type: POOPYBUTTHOLE,
    payload: { characters: data },
  };
}

// Select gender
export function male(data) {
  return {
    type: MALE,
    payload: { characters: data },
  };
}

export function female(data) {
  return {
    type: FEMALE,
    payload: { characters: data },
  };
}

export function unknownGender(data) {
  return {
    type: UNKNOWN_GENDER,
    payload: { characters: data },
  };
}
// Select status
export function alive(data) {
  return {
    type: ALIVE,
    payload: { characters: data },
  };
}

export function dead(data) {
  return {
    type: DEAD,
    payload: { characters: data },
  };
}

export function unknownStatus(data) {
  return {
    type: UNKNOWN_STATUS,
    payload: { characters: data },
  };
}
