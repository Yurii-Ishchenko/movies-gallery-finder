import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import Loader from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';

const HomePageView = lazy(() =>
  import('./views/HomePageView' /* webpackChunkName: "home-view" */),
);
const MoviesPageView = lazy(() =>
  import('./views/MoviesPageView' /* webpackChunkName: "movies-view" */),
);
const MovieDetailsPageView = lazy(() =>
  import(
    './views/MovieDetailsPageView.js' /* webpackChunkName: "movieDetailsPage-view" */
  ),
);
const useStyles = createUseStyles({
  container: {
    backgroundColor: '#252433',
  },
  loading: {
    textAlign: 'center',
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <div className={classes.container}>
        <Suspense
          fallback={
            <div className={classes.loading}>
              <Loader type="Oval" color="#00BFFF" height={100} width={100} />
            </div>
          }
        >
          <hr style={{ margin: 0 }} />
          <Switch>
            <Route exact path="/">
              <HomePageView />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailsPageView />
            </Route>
            <Route path="/movies">
              <MoviesPageView />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
      <ToastContainer />
    </>
  );
}
