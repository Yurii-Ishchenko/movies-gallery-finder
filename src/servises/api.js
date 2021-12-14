const API_KEY = '73305cb339434d37e6117f3ddb0a9c1f';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchPopularMovies = () => {
  return fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`).then(r =>
    r.json(),
  );
};

export const fetchMovieById = movieId => {
  return fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  ).then(r => r.json());
};

const fetchMovieByName = movieName => {
  return fetch(
    `${BASE_URL}/search/movie?query=${movieName}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
  ).then(r => r.json());
};

const fetchMovieCastById = movieId => {
  return fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  ).then(r => r.json());
};

const fetchMovieReviewsById = movieId => {
  return fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  ).then(r => r.json());
};

const API = {
  fetchPopularMovies,
  fetchMovieById,
  fetchMovieByName,
  fetchMovieCastById,
  fetchMovieReviewsById,
};

export default API;
