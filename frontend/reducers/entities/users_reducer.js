import { RECEIVE_SERVER_MEMBERS } from '../../actions/server_actions';
import {
  RECEIVE_SERVER_INFO
} from '../../actions/server_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SERVER_INFO:
      return action.info.members
    case RECEIVE_SERVER_MEMBERS:
      return action.members;
    default:
      return state;
  }
}

export default usersReducer;