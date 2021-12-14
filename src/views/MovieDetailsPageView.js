import { useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  NavLink,
  Route,
  useRouteMatch,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { animateScroll as scroll } from 'react-scroll';
import { useSelector, useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import Button from '../components/Button';
import { fetchMovieById } from '../redux/movie-operations';
import { fetchMovieByIdSuccess } from '../redux/movie-actions';
import MovieCard from '../components/MovieCard';
import { getLoading, getMovieById } from '../redux/movie-selectors';
const CastView = lazy(() =>
  import('./CastView' /* webpackChunkName: "cast-view" */),
);
const ReviewsView = lazy(() =>
  import('./ReviewsView' /* webpackChunkName: "reviews-view" */),
);

const useStyles = createUseStyles({
  container: {
    color: 'white',
    textAlign: 'center',
    padding: 30,
    minHeight: '100vh',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
  },
  link: {
    color: 'white',
    marginRight: 10,
    '&:hover': {
      color: 'red',
    },
  },
  activeLink: {
    color: 'red',
  },
  btns: {
    width: 150,

    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
  },
  btn: {
    width: 150,
  },
});

export default function MovieDetailsPage() {
  const classes = useStyles();
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const movie = useSelector(getMovieById);
  const isLoading = useSelector(getLoading);
  function scrollToBottom() {
    scroll.scrollToBottom();
  }
  function scrollToTop() {
    scroll.scrollToTop();
  }
  function onBtnClick() {
    history.push(location?.state?.from ?? '/');
  }
  useEffect(() => {
    dispatch(fetchMovieById(movieId));
    return () => {
      dispatch(fetchMovieByIdSuccess(null));
    };
  }, [movieId, dispatch]);

  return (
    <div className={classes.container}>
      <div className={classes.btn}>
        <Button onClick={onBtnClick} type="button">
          Go back
        </Button>
      </div>

      {isLoading && (
        <Loader type="Oval" color="#00BFFF" height={100} width={100} />
      )}

      {movie?.title && (
        <>
          <MovieCard movie={movie} />
          <h3>Additional information:</h3>
          <div className={classes.links}>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: location?.state?.from },
              }}
              onClick={scrollToBottom}
              className={classes.link}
              activeClassName={classes.activeLink}
            >
              Cast
            </NavLink>
            <br />
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: location?.state?.from },
              }}
              onClick={scrollToBottom}
              className={classes.link}
              activeClassName={classes.activeLink}
            >
              Reviews
            </NavLink>
          </div>

          <Suspense
            fallback={
              <Loader type="Oval" color="#00BFFF" height={100} width={100} />
            }
          >
            <Switch>
              <Route path={`${path}/cast`}>
                <CastView />
              </Route>
              <Route path={`${path}/reviews`}>
                <ReviewsView />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
      {movie?.success === false && <h1>Sorry, movie not found</h1>}
      {movie?.title && (
        <div className={classes.btns}>
          <Button onClick={scrollToTop} type="button">
            To top
          </Button>
          <Button onClick={onBtnClick} type="button">
            Go back
          </Button>
        </div>
      )}
    </div>
  );
}
