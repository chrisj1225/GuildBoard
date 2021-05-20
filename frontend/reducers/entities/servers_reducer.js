import { 
  RECEIVE_ALL_SERVERS,
  RECEIVE_SERVER,
  REMOVE_SERVER
} from '../../actions/server_actions'
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const serversReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_SERVERS:
      return action.servers;
    case RECEIVE_SERVER:
      return Object.assign({}, state, { [action.serverInfo.server.id]: action.serverInfo.server })
    case REMOVE_SERVER:
      let newState = Object.assign({}, state);
      delete newState[action.serverId];
      return newState;
    case LOGOUT_CURRENT_USER:
        return {};
    default:
      return state;
  }
}

export default serversReducer;