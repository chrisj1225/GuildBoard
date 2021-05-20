import { RECEIVE_SERVER_MEMBERS } from '../../actions/server_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SERVER_MEMBERS:
      return action.members;
    default:
      return state;
  }
}

export default usersReducer;