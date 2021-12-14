import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { createUseStyles } from 'react-jss';
import ReviewsCard from '../components/review/ReviewsCard';
import { fetchMovieReviewsById } from '../redux/movie-operations';
import { fetchMovieReviewsByIdSuccess } from '../redux/movie-actions';
import { getLoading, getMovieReviewsById } from '../redux/movie-selectors';

const useStyles = createUseStyles({
  list: {
    listStyle: 'none',
    padding: 0,
    width: 1000,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  item: {
    marginBottom: 20,
  },
});

export default function Reviews() {
  const classes = useStyles();
  const { movieId } = useParams();
  const reviews = useSelector(getMovieReviewsById);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieReviewsById(movieId));
    return () => dispatch(fetchMovieReviewsByIdSuccess([]));
  }, [movieId, dispatch]);

  if (isLoading) {
    return <Loader type="Oval" color="#00BFFF" height={100} width={100} />;
  }
  if (reviews?.length > 0) {
    return (
      <ul className={classes.list}>
        {reviews.map(({ id, author, content }) => (
          <li key={id} className={classes.item}>
            <ReviewsCard author={author} content={content} />
          </li>
        ))}
      </ul>
    );
  }
  return <p>Sorry, not found any reviews for this movie</p>;
}
