import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import {
  fetchMovieByNameSuccess,
  getSearchValueAction,
} from '../redux/movie-actions';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f1b2e',
    height: 70,
    paddingLeft: 55,
  },
  link: {
    fontSize: 20,
    color: 'white',
    marginLeft: 20,
    textDecoration: 'none',
  },
  activeLink: {
    color: 'red',
  },
});
export default function NaviBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <header>
      <div className={classes.container}>
        <NavLink
          exact
          className={classes.link}
          activeClassName={classes.activeLink}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={classes.link}
          activeClassName={classes.activeLink}
          to="/movies"
          onClick={() => {
            dispatch(fetchMovieByNameSuccess([]));
            dispatch(getSearchValueAction(''));
          }}
        >
          Movies
        </NavLink>
      </div>
    </header>
  );
}
