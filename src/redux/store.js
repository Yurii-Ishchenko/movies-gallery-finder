import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import movieReducer from './movie-reducer';
const thunk =
  ({ dispatch, getState }) =>
  next =>
  action =>
    typeof action === 'function' ? action(dispatch, getState) : next(action);

export const store = createStore(
  movieReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
