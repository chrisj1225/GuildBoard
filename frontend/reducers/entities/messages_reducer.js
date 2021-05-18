import { 
  RECEIVE_CHANNEL_MESSAGES,
  RECEIVE_MESSAGE
} from '../../actions/message_actions';

const messagesReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [...state];
  switch(action.type) {
    case RECEIVE_CHANNEL_MESSAGES:
      return action.messages
    case RECEIVE_MESSAGE: 
      return [...newState, action.message];
    default:
      return state;
  }
}

export default messagesReducer;