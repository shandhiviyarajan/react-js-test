import { combineReducers } from 'redux';
import robotsReducers from './robotsReducers';
import authReducer from './authReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  robots: robotsReducers,
  shopping: cartReducer
});
export default rootReducer;
