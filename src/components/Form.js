import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { toast } from 'react-toastify';
import Button from './Button';
import { getSearchValueAction } from '../redux/movie-actions';

const useStyles = createUseStyles({
  form: {
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#252433',
    color: 'white',
    borderColor: 'white',
    borderRadius: 5,
    marginRight: 10,
  },
  container: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export default function Form({ onSubmit }) {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const handleFormSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      toast.error('Please enter correct title for the movie');
    }
    dispatch(getSearchValueAction(value));
    setValue('');
  };
  return (
    <div className={classes.container}>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="spider-man"
          className={classes.input}
          onChange={e => {
            setValue(e.target.value);
          }}
          value={value}
          type="text"
        />
        <Button type="submit">search</Button>
      </form>
    </div>
  );
}
