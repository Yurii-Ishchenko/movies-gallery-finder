import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { createUseStyles } from 'react-jss';
import CastCard from '../components/CastCard';
import { fetchMovieCastById } from '../redux/movie-operations';
import { fetchMovieCastByIdSuccess } from '../redux/movie-actions';
import { getLoading, getActors } from '../redux/movie-selectors';

const useStyles = createUseStyles({
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    width: 1200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  item: {
    width: 370,
    marginRight: 30,
    marginTop: 30,
    '&:nth-child(-n +3)': {
      marginTop: 0,
    },
    '&:nth-child(3n)': {
      marginRight: 0,
    },
  },
});
export default function Cast() {
  const classes = useStyles();
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const actors = useSelector(getActors);

  const isLoading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchMovieCastById(movieId));

    return () => dispatch(fetchMovieCastByIdSuccess([]));
  }, [movieId, dispatch]);

  if (isLoading) {
    return <Loader type="Oval" color="#00BFFF" height={100} width={100} />;
  }

  if (actors.length > 0) {
    return (
      <ul className={classes.list}>
        {actors.map(({ id, profile_path, name, character, gender }) => (
          <li key={id} className={classes.item}>
            <CastCard
              imageURL={profile_path}
              name={name}
              character={character}
              gender={gender}
            />
          </li>
        ))}
      </ul>
    );
  }

  return <h1>Sorry, not found</h1>;
}
