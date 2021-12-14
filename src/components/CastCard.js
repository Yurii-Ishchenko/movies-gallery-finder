import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Modal from './Modal';
import defaultUnknownManImage from '../images/unknownMan.jpg';
import defaultUnknownWomanImage from '../images/unknownWoman.jpg';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    backgroundColor: 'black',
    border: '2px solid white',
  },
  img: {
    border: '2px solid white',
  },
  cardContent: {
    padding: 10,
  },
});
export default function CastCard({ imageURL, name, character, gender }) {
  const classes = useStyles();
  const defaultImage =
    gender === 1 ? defaultUnknownWomanImage : defaultUnknownManImage;
  const src = imageURL
    ? `https://image.tmdb.org/t/p/w400${imageURL}`
    : defaultImage;
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    return setShowModal(!showModal);
  };
  return (
    <>
      <div className={classes.container} onClick={() => console.log(gender)}>
        <div className={classes.img}>
          <img onClick={toggleModal} src={src} alt={name} width="200px" />
        </div>
        <div className={classes.cardContent}>
          <h3>Name:</h3>
          <p>{name}</p>
          <h3>Character:</h3>
          <p>{character}</p>
        </div>
      </div>
      {showModal && <Modal onClose={toggleModal} src={src} alt={name} />}
    </>
  );
}
