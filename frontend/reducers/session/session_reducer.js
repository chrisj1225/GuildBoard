import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import userServersReducer from './user_servers_reducer';

const sessionReducer = combineReducers({
  user: authReducer,
  userServers: userServersReducer
})

export default sessionReducer;