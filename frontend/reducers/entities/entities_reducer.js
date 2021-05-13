import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import { serversReducer, allServersReducer } from './servers_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  allServers: allServersReducer
})

export default entitiesReducer;