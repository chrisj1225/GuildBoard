import { RECEIVE_MESSAGE } from '../../actions/message_actions';
import { RECEIVE_SERVER_MEMBERS, RECEIVE_SERVER_INFO } from '../../actions/server_actions';
import { RECEIVE_DM, REMOVE_DM } from '../../actions/dm_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SERVER_INFO:
      return Object.assign({}, action.info.members)
    case RECEIVE_SERVER_MEMBERS:
      return Object.assign({}, action.members);
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, {[action.message.authorId]: action.message.author})
    case RECEIVE_DM:
      return Object.assign({}, action.data.members);
    case REMOVE_DM:
      return {};
    default:
      return state;
  }
}

export default usersReducer;