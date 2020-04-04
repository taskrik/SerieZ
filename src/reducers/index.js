import { combineReducers } from 'redux';
import series from './series';
import serieDetails from './getDetails';

export default combineReducers({
  series,
  serieDetails,
});
