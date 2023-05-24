import axios from 'axios';

const API_KEY = 'f492f391e784a6c6bab08c174c3d150f';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/all/day`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const ID_URL = `${BASE_URL}/movie`;

// export { API_KEY, BASE_URL, TREND_URL, SEARCH_URL, ID_URL };

// import { API_KEY, BASE_URL, TREND_URL, SEARCH_URL, ID_URL } from './api';

export async function getTrending() {
  const url = `${TREND_URL}?api_key=${API_KEY}&language=en-US`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

export async function searchMovie(queryString) {
  const url = `${SEARCH_URL}?query=${queryString}&language=en-US`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

export async function getMovieDetails(id) {
  const url = `${ID_URL}?api_key=${API_KEY}?${id}&language=en-US`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

export async function getMovieCast(id) {
  const url = `${ID_URL}?${id}/credits&language=en-US`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

export async function getMovieReviews(id) {
  const url = `${ID_URL}?${id}/reviews&language=en-US`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}
