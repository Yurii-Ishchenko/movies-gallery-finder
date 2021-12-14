/* eslint-disable */
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import queryString from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { createUseStyles } from 'react-jss';
import { fetchMovieByName } from '../redux/movie-operations';
import { notFoundPageAction } from '../redux/movie-actions';
import {
  getLoading,
  getSearchValue,
  getNotFoundState,
} from '../redux/movie-selectors';
import Form from '../components/Form';
import MoviesList from '../components/MoviesList';

const useStyles = createUseStyles({
  container: {
    width: 1200,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100vh',
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
  load: {
    textAlign: 'center',
  },
});

const MoviesPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const movies = useSelector(state => state.moviesByName);
  const searchValue = useSelector(getSearchValue);
  const notFound = useSelector(getNotFoundState);
  const isLoading = useSelector(getLoading);
  const serchValueByQqeryString =
    queryString.parse(location.search).query ?? '';
  console.log(serchValueByQqeryString);

  useEffect(() => {
    if (searchValue.trim() === '') {
      return;
    }

    history.push({
      ...location,
      search: `query=${searchValue}`,
    });
  }, [searchValue]);

  useEffect(() => {
    if (serchValueByQqeryString === '') {
      return;
    }
    dispatch(fetchMovieByName(serchValueByQqeryString));
    return () => dispatch(notFoundPageAction(false));
  }, [dispatch, serchValueByQqeryString]);

  return (
    <div className={classes.container}>
      <Form />
      {isLoading && (
        <Loader
          type="Oval"
          color="#00BFFF"
          height={100}
          width={100}
          className={classes.load}
        />
      )}
      {notFound && (
        <h2 className={classes.title}>Sorry, not found. Try again.</h2>
      )}
      {movies?.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        <h2 className={classes.title}>Let's find your movie...</h2>
      )}
    </div>
  );
};

export default MoviesPage;
