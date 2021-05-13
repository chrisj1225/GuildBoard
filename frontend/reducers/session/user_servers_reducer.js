import { RECEIVE_USER_SERVERS } from '../../actions/server_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const userServersReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_SERVERS:
      return Object.values(action.servers);
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
}

export default userServersReducer;
