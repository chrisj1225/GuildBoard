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
  let newState = {...state};
  switch(action.type) {
    case RECEIVE_ALL_CHANNELS:
      return action.channels;
    case RECEIVE_CHANNELS:
      return action.channels;
    case RECEIVE_CHANNEL:
      // return Object.assign({}, state, { [action.channel.id]: action.channel })
      return {
        ...state,
        [action.channel.id]: action.channel
      }
    case RECEIVE_SERVER:
      // new channel is initialized in ServersController#create
      // duplicate is being added to the state here so that 
      // user can get redirected to new server's 'general' channel.
      const newGenChan = {
        id: action.server.genChanId,
        title: 'general',
        serverId: action.server.id,
        ownerId: action.server.ownerId
      }
      return {
        ...state,
        [newGenChan.id]: newGenChan
      }      
    case RECEIVE_USER_SERVER:   
      // console.log(newState);
      // const channels = {};
      // for (let key in newState) {
      //   if (newState[key].serverId == action.id) {
      //     channels[key] = newState[key]
      //   }
      // }
      // console.log(channels)
      // return {
      //   ...state,
      //   ...channels
      // }
      
      // since state.entities.channels now hold all channels in DB:
      // nothing needs to be added to state, it's already there.
      return state;
    case REMOVE_CHANNEL:
      delete newState[action.channelId];
      return newState;
    case LOGOUT_CURRENT_USER:
        return {};
    default:
      return state;
  }
}

export default channelsReducer;