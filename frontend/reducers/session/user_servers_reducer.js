import { RECEIVE_USER_SERVERS, RECEIVE_USER_SERVER, REMOVE_USER_SERVER } from '../../actions/server_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const userServersReducer = (state = [], action) => {
  // debugger
  let newState = [...state];
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_SERVERS:
      return Object.keys(action.servers);
    case RECEIVE_USER_SERVER:
      return newState.push(action.server.id);
    case REMOVE_USER_SERVER:
      newState.splice(newState.indexOf(action.server.id), 1);
      return newState;
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
}

export default userServersReducer;
