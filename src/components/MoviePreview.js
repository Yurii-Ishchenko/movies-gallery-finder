import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import defaultImage from '../images/defaultPosterImg.jpg';

const useStyles = createUseStyles({
  card: {
    position: 'relative',
    width: 220,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  Overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1200,
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
  overview: {
    color: 'white',
    padding: 10,
  },
});

export default function MoviePreview({ title, name, imageURL, overview }) {
  const [modal, showModal] = useState(false);
  const classes = useStyles();
  const sliceOverview = overview => {
    const maxLength = 250;
    if (overview.length > maxLength) {
      return `${overview.slice(0, maxLength)}...`;
    }
    return overview;
  };
  const slicedOverview = sliceOverview(overview);
  return (
    <div
      className={classes.card}
      onMouseEnter={() => showModal(true)}
      onMouseLeave={() => showModal(false)}
    >
      <img
        src={
          imageURL ? `https://image.tmdb.org/t/p/w400${imageURL}` : defaultImage
        }
        alt={title ?? name}
        width="250px"
      />
      {modal && (
        <div className={classes.Overlay}>
          <div>
            <h3 className={classes.title}>{title ?? name}</h3>

            <p className={classes.overview}>{slicedOverview}</p>
          </div>
        </div>
      )}
    </div>
  );
}
