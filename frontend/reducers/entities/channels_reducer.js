import { 
  RECEIVE_ALL_CHANNELS,
  RECEIVE_CHANNEL,
  REMOVE_CHANNEL
} from '../../actions/channel_actions'
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const channelsReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_CHANNELS:
      return action.servers;
    case RECEIVE_CHANNEL:
      return Object.assign({}, state, { [action.channel.id]: action.channel })
    case REMOVE_CHANNEL:
      let newState = Object.assign({}, state);
      delete newState[action.serverId];
      return newState;
    case LOGOUT_CURRENT_USER:
        return {};
    default:
      return state;
  }
}

export default channelsReducer;