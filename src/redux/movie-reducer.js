import { combineReducers } from 'redux';
import types from './movie-types';

const popularMovieReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_POPULAR_MOVIE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const movieByIdReducer = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_MOVIE_BY_ID_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const movieByNameReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_MOVIE_BY_NAME_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const movieCastByIdReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_MOVIE_CAST_BY_ID_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const movieReviewsByIdReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_MOVIE_REVIEWS_BY_ID_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const notFoundPageReducer = (state = false, action) => {
  switch (action.type) {
    case types.NOT_FOUND:
      return action.payload;
    default:
      return state;
  }
};

const getSearchValueReducer = (state = '', action) => {
  switch (action.type) {
    case types.GET_SEARCH_VALUE:
      return action.payload;
    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_POPULAR_MOVIE_REQUEST:
      return true;
    case types.FETCH_POPULAR_MOVIE_SUCCESS:
      return false;
    case types.FETCH_POPULAR_MOVIE_ERROR:
      return false;
    case types.FETCH_MOVIE_BY_ID_REQUEST:
      return true;
    case types.FETCH_MOVIE_BY_ID_SUCCESS:
      return false;
    case types.FETCH_MOVIE_BY_ID_ERROR:
      return false;
    case types.FETCH_MOVIE_BY_NAME_REQUEST:
      return true;
    case types.FETCH_MOVIE_BY_NAME_SUCCESS:
      return false;
    case types.FETCH_MOVIE_BY_NAME_ERROR:
      return false;
    case types.FETCH_MOVIE_CAST_BY_ID_REQUEST:
      return true;
    case types.FETCH_MOVIE_CAST_BY_ID_SUCCESS:
      return false;
    case types.FETCH_MOVIE_CAST_BY_ID_ERROR:
      return false;
    case types.FETCH_MOVIE_REVIEWS_BY_ID_REQUEST:
      return true;
    case types.FETCH_MOVIE_REVIEWS_BY_ID_SUCCESS:
      return false;
    case types.FETCH_MOVIE_REVIEWS_BY_ID_ERROR:
      return false;
    default:
      return state;
  }
};

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_POPULAR_MOVIE_REQUEST:
      return null;
    case types.FETCH_POPULAR_MOVIE_ERROR:
      return action.payload;
    case types.FETCH_MOVIE_BY_ID_REQUEST:
      return null;
    case types.FETCH_MOVIE_BY_ID_ERROR:
      return action.payload;
    case types.FETCH_MOVIE_BY_NAME_REQUEST:
      return null;
    case types.FETCH_MOVIE_BY_NAME_ERROR:
      return action.payload;
    case types.FETCH_MOVIE_CAST_BY_ID_REQUEST:
      return null;
    case types.FETCH_MOVIE_CAST_BY_ID_ERROR:
      return action.payload;
    case types.FETCH_MOVIE_REVIEWS_BY_ID_REQUEST:
      return null;
    case types.FETCH_MOVIE_REVIEWS_BY_ID_ERROR:
      return action.payload;
    default:
      return state;
  }
};
export default combineReducers({
  popularMovies: popularMovieReducer,
  movieById: movieByIdReducer,
  moviesByName: movieByNameReducer,
  movieCastById: movieCastByIdReducer,
  movieReviewsById: movieReviewsByIdReducer,
  notFound: notFoundPageReducer,
  searchValue: getSearchValueReducer,
  loading: loadingReducer,
  error: errorReducer,
});
