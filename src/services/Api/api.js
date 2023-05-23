import axios from 'axios';

const API_KEY = 'f492f391e784a6c6bab08c174c3d150f';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/all/day`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const ID_URL = `${BASE_URL}/movie`;

// export { API_KEY, BASE_URL, TREND_URL, SEARCH_URL, ID_URL };

// import { API_KEY, BASE_URL, TREND_URL, SEARCH_URL, ID_URL } from './api';

// async function getTrending() {
//   const params = `?key=${KEY}&${movieId}`;
//   const response = await fetch(`${BASE_URL}${params}?language=en-US`);
//   return await response.json();
// }

// export default getTrending;

export async function getTrending() {
  const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
}
