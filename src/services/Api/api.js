import axios from 'axios';

const API_KEY = 'f492f391e784a6c6bab08c174c3d150f';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/all/day`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const ID_URL = `${BASE_URL}/movie`;

export async function getTrending() {
  const url = `${TREND_URL}?api_key=${API_KEY}&language=en-US`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

export async function searchMovies(query) {
  const url = `${SEARCH_URL}?api_key=${API_KEY}&include_adult=false&query=${query}&language=en-US&page=1`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

export async function getMovieDetails(id) {
  const url = `${ID_URL}/${id}?api_key=${API_KEY}&language=en-US`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

export async function getMovieCast(id) {
  const url = `${ID_URL}/${id}/credits?api_key=${API_KEY}&language=en-US`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}

export async function getMovieReviews(id) {
  const url = `${ID_URL}/${id}/reviews?api_key=${API_KEY}&language=en-US`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}
