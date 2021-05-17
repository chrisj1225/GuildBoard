import { 
  RECEIVE_ALL_CHANNELS,
  RECEIVE_CHANNELS,
  RECEIVE_CHANNEL,
  REMOVE_CHANNEL
} from '../../actions/channel_actions';
import {
  RECEIVE_USER_SERVER, 
  RECEIVE_SERVER,
  REMOVE_SERVER
} from '../../actions/server_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const channelsReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  switch(action.type) {
    // case RECEIVE_ALL_CHANNELS:
    //   return action.channels;
    case RECEIVE_CHANNELS:
      return action.channels;
    case RECEIVE_CHANNEL:
      // return Object.assign({}, state, { [action.channel.id]: action.channel })
      return {
        ...state,
        [action.channel.id]: action.channel
      }
    case RECEIVE_USER_SERVER:    
      const channel_params = {
        id: action.server.genChanId,
        title: 'general',
        serverId: action.server.id,
        ownerId: action.server.ownerId
      }
      return {
        ...state,
        [channel_params.id]: channel_params
      }
    case REMOVE_CHANNEL:
      let newState = Object.assign({}, state);
      delete newState[action.channelId];
      return newState;
    case LOGOUT_CURRENT_USER:
        return {};
    default:
      return state;
  }
}

export default channelsReducer;