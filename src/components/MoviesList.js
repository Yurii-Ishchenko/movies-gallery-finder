import { Link, useLocation } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import MoviePreview from './MoviePreview';

const useStyles = createUseStyles({
  list: {
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
  },
});
export default function MoviesList({ movies }) {
  const classes = useStyles();
  const location = useLocation();

  return (
    <ul className={classes.list}>
      {movies.map(({ id, title, name, poster_path, overview }) => (
        <li key={id} className={classes.item}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            <MoviePreview
              title={title}
              name={name}
              imageURL={poster_path}
              overview={overview}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
