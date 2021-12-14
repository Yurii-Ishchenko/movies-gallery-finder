import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  btn: {
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'black',
    borderRadius: 5,
    minWidth: 70,
    height: 23,
    paddingLeft: 5,
    paddingRight: 5,
    '&:hover': {
      color: 'white',
      backgroundColor: '#252433',
      borderColor: 'white',
    },
  },
});

export default function Button({ type, onClick, children }) {
  const classes = useStyles();
  return (
    <button type={type} className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
}
