import types from './movie-types';

export const fetchPopularMoviesRequest = () => ({
  type: types.FETCH_POPULAR_MOVIE_REQUEST,
});

export const fetchPopularMoviesSuccess = payload => ({
  type: types.FETCH_POPULAR_MOVIE_SUCCESS,
  payload,
});

export const fetchPopularMoviesError = payload => ({
  type: types.FETCH_POPULAR_MOVIE_ERROR,
  payload,
});

export const fetchMovieByIdRequest = () => ({
  type: types.FETCH_MOVIE_BY_ID_REQUEST,
});

export const fetchMovieByIdSuccess = payload => ({
  type: types.FETCH_MOVIE_BY_ID_SUCCESS,
  payload,
});

export const fetchMovieByIdError = payload => ({
  type: types.FETCH_MOVIE_BY_ID_REQUEST,
  payload,
});

export const fetchMovieByNameRequest = () => ({
  type: types.FETCH_MOVIE_BY_NAME_REQUEST,
});

export const fetchMovieByNameSuccess = payload => ({
  type: types.FETCH_MOVIE_BY_NAME_SUCCESS,
  payload,
});

export const fetchMovieByNameError = payload => ({
  type: types.FETCH_MOVIE_BY_NAME_ERROR,
  payload,
});

export const fetchMovieCastByIdRequest = () => ({
  type: types.FETCH_MOVIE_CAST_BY_ID_REQUEST,
});

export const fetchMovieCastByIdSuccess = payload => ({
  type: types.FETCH_MOVIE_CAST_BY_ID_SUCCESS,
  payload,
});

export const fetchMovieCastByIdError = payload => ({
  type: types.FETCH_MOVIE_CAST_BY_ID_ERROR,
  payload,
});

export const fetchMovieReviewsByIdRequest = () => ({
  type: types.FETCH_MOVIE_REVIEWS_BY_ID_REQUEST,
});

export const fetchMovieReviewsByIdSuccess = payload => ({
  type: types.FETCH_MOVIE_REVIEWS_BY_ID_SUCCESS,
  payload,
});

export const fetchMovieReviewsByIdError = payload => ({
  type: types.FETCH_MOVIE_REVIEWS_BY_ID_ERROR,
  payload,
});

export const notFoundPageAction = payload => ({
  type: types.NOT_FOUND,
  payload,
});
export const getSearchValueAction = payload => ({
  type: types.GET_SEARCH_VALUE,
  payload,
});
