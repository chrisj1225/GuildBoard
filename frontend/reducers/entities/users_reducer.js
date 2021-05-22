import { RECEIVE_MESSAGE } from '../../actions/message_actions';
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
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, {[action.message.authorId]: action.message.author})
    default:
      return state;
  }
}

export default usersReducer;