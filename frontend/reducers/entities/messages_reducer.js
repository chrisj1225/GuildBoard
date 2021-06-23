import { 
  RECEIVE_CHANNEL_MESSAGES,
  RECEIVE_MESSAGE,
  REMOVE_MESSAGE
} from '../../actions/message_actions';
import { 
  RECEIVE_DM,
} from '../../actions/dm_actions';
import {
  RECEIVE_SERVER_INFO
} from '../../actions/server_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger
  let newState = {...state};
  switch(action.type) {
    case RECEIVE_CHANNEL_MESSAGES:
      // return Object.assign({}, state, action.messages)
      return action.messages;
    case RECEIVE_SERVER_INFO:
      return Object.assign({}, action.info.messages);
    case RECEIVE_MESSAGE: 
      return Object.assign({}, state, { [action.message.id]: action.message });
    case RECEIVE_DM:
      return Object.assign({}, action.data.messages);
    case REMOVE_MESSAGE: 
      delete newState[action.messageId];
      return newState;
    default:
      return state;
  }
}

export default messagesReducer;