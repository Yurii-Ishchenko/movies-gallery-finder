import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },

  content: {
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
  },
});
export default function Modal({ onClose, src, alt }) {
  const classes = useStyles();
  const handlebackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={classes.overlay} onClick={handlebackdropClick}>
      <div className={classes.content}>
        <img src={src} alt={alt} width="400px" />
      </div>
    </div>
  );
}
