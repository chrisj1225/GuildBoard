import { combineReducers } from 'redux';
import currentUserReducer from './currentUser_reducer';
import usersReducer from './users_reducer';
import serversReducer from './servers_reducer';
import channelsReducer from './channels_reducer';
import messagesReducer from './messages_reducer';
import dmsReducer from './dms_reducer';

const entitiesReducer = combineReducers({
  currentUser: currentUserReducer,
  users: usersReducer,
  servers: serversReducer,
  channels: channelsReducer,
  messages: messagesReducer,
  dms: dmsReducer
});

export default entitiesReducer;