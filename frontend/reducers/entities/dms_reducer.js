import { 
  RECEIVE_USER_DMS,
  RECEIVE_DM,
  REMOVE_DM
} from '../../actions/dm_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const dmsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_DMS:
      return Object.assign({}, action.dms);
    case RECEIVE_DM:
      return Object.assign({}, state, { [action.data.dm.id]: action.data.dm })
    case REMOVE_DM:
      let newState = Object.assign({}, state);
      delete newState[action.dmId];
      return newState;
    case LOGOUT_CURRENT_USER:
        return {};
    default:
      return state;
  }
}

export default dmsReducer;