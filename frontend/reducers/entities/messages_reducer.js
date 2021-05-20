import { 
  RECEIVE_CHANNEL_MESSAGES,
  RECEIVE_MESSAGE
} from '../../actions/message_actions';

import {
  RECEIVE_SERVER_INFO
} from '../../actions/server_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger
  switch(action.type) {
    case RECEIVE_CHANNEL_MESSAGES:
      // return Object.assign({}, state, action.messages)
      return action.messages;
    case RECEIVE_SERVER_INFO:
      return Object.assign({}, action.info.messages);
    case RECEIVE_MESSAGE: 
      return Object.assign({}, state, { [action.message.id]: action.message });
    default:
      return state;
  }
}

export default messagesReducer;