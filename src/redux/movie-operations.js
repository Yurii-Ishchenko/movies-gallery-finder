import {
  fetchPopularMoviesRequest,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchMovieByIdRequest,
  fetchMovieByIdSuccess,
  fetchMovieByIdError,
  fetchMovieByNameRequest,
  fetchMovieByNameSuccess,
  fetchMovieByNameError,
  fetchMovieCastByIdRequest,
  fetchMovieCastByIdSuccess,
  fetchMovieCastByIdError,
  fetchMovieReviewsByIdRequest,
  fetchMovieReviewsByIdSuccess,
  fetchMovieReviewsByIdError,
  notFoundPageAction,
} from './movie-actions';
import API from '../servises/api';

export const fetchPopularMovies = () => async dispatch => {
  dispatch(fetchPopularMoviesRequest());
  try {
    const data = await API.fetchPopularMovies();
    dispatch(fetchPopularMoviesSuccess(data.results));
  } catch (error) {
    dispatch(fetchPopularMoviesError(error));
  }
};

export const fetchMovieById = movieId => async dispatch => {
  dispatch(fetchMovieByIdRequest());
  try {
    const data = await API.fetchMovieById(movieId);
    dispatch(fetchMovieByIdSuccess(data));
  } catch (error) {
    dispatch(fetchMovieByIdError(error));
  }
};

export const fetchMovieByName = movieName => async dispatch => {
  dispatch(fetchMovieByNameRequest());
  try {
    API.fetchMovieByName(movieName).then(({ results }) => {
      if (results.length === 0) {
        return (
          dispatch(notFoundPageAction(true)) &
          dispatch(fetchMovieByNameSuccess([]))
        );
      }
      return (
        dispatch(fetchMovieByNameSuccess(results)) &
        dispatch(notFoundPageAction(false))
      );
    });
  } catch (error) {
    dispatch(fetchMovieByNameError(error));
  }
};

export const fetchMovieCastById = movieId => async dispatch => {
  dispatch(fetchMovieCastByIdRequest());
  try {
    API.fetchMovieCastById(movieId).then(({ cast }) =>
      dispatch(fetchMovieCastByIdSuccess(cast)),
    );
  } catch (error) {
    dispatch(fetchMovieCastByIdError(error));
  }
};

export const fetchMovieReviewsById = movieId => async dispatch => {
  dispatch(fetchMovieReviewsByIdRequest());
  try {
    API.fetchMovieReviewsById(movieId).then(({ results }) =>
      dispatch(fetchMovieReviewsByIdSuccess(results)),
    );
  } catch (error) {
    dispatch(fetchMovieReviewsByIdError(error));
  }
};
