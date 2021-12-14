import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Modal from './Modal';
import defaultImage from '../images/defaultPosterImg.jpg';
const useStyles = createUseStyles({
  thumb: {
    display: 'flex',
    width: 650,
    padding: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '2px solid white',
  },
  text: {
    color: 'white',
  },
  imgContainer: {
    padding: 15,
  },
  img: {
    border: '2px solid white',
  },
  genreList: {
    listStyle: 'none',
    padding: 0,
  },
  overview: {
    width: 300,
  },
});

export default function MovieCard({ movie }) {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const src = movie.poster_path
    ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
    : defaultImage;
  const toggleModal = () => {
    return setShowModal(!showModal);
  };
  return (
    <>
      <div className={classes.thumb}>
        <div className={classes.imgContainer}>
          <img
            onClick={toggleModal}
            className={classes.img}
            src={src}
            alt={movie.title}
            width="300px"
          />
        </div>
        <div className={classes.text}>
          <h2>{movie.title}</h2>
          <p>
            User Score:{' '}
            {movie.vote_average
              ? `${movie.vote_average * 10}%`
              : 'Sorry, not found'}
          </p>
          <h3>Overview:</h3>
          <p className={classes.overview}>{movie.overview}</p>
          <h4>Genres:</h4>
          <ul className={classes.genreList}>
            {movie?.genres.length > 10 ? (
              movie.genres.map(({ id, name }) => <li key={id}>{name}</li>)
            ) : (
              <p>Sorry, genres not found</p>
            )}
          </ul>
        </div>
      </div>
      {showModal && <Modal onClose={toggleModal} src={src} alt={movie.title} />}
    </>
  );
}
