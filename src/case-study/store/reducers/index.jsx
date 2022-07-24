import { combineReducers } from 'redux';
import apis from '../apis/apis.reducer';
import apisDetails from '../apis/apisDetails.reducer';

export default combineReducers({
  apis,
  apisDetails,
});
