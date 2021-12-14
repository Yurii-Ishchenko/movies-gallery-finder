import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { fetchPopularMovies } from '../redux/movie-operations';
import { getPopularMovies } from '../redux/movie-selectors';
import MoviesList from '../components/MoviesList';

const useStyles = createUseStyles({
  container: {
    width: 1200,
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: '100vh',
  },
  title: {
    color: '#ffffff',
    textAlign: 'center',
    margin: 0,
  },
});

const HomePage = () => {
  const classes = useStyles();
  const popularMovies = useSelector(getPopularMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Trending Today</h1>
      {popularMovies && <MoviesList movies={popularMovies} />}
    </div>
  );
};

export default HomePage;
