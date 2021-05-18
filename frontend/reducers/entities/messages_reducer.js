import { 
  RECEIVE_CHANNEL_MESSAGES,
  RECEIVE_MESSAGE
} from '../../actions/message_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CHANNEL_MESSAGES:
      return Object.assign({}, state, action.messages)
    case RECEIVE_MESSAGE: 
      return Object.assign({}, state, { [action.message.id]: action.message });
    default:
      return state;
  }
}

export default messagesReducer;