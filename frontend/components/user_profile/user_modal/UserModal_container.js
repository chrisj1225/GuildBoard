import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createDM } from '../../../actions/dm_actions';
import UserModal from './UserModal';

const mSTP = (state, ownProps) => {
  return({
    users: Object.values(state.entities.users),
  })
}

const mDTP = dispatch => {
  return ({
    createDM: (otherUserId) => dispatch(createDM(otherUserId)),
  })
}

export default withRouter(connect(mSTP, mDTP)(UserModal));