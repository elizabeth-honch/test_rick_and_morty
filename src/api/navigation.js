const BASE_URL = 'https://rickandmortyapi.com/api/';

export const request = (url, options) => fetch(`${BASE_URL}${url}`, options)
  .then((res) => res.json())
  .then((data) => data.results)
  .catch((error) => error);

export const getCharacter = (page) => request(`character/?page=${page}`);
export const getEpisode = (page) => request(`episode/?page=${page}`);
export const getLocation = (page) => request(`location/?page=${page}`);
