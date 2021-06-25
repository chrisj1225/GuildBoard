import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createDM } from '../../../actions/dm_actions';
import { closeModal } from '../../../actions/ui_actions';
import UserModal from './UserModal';

const mSTP = (state, ownProps) => {
  return({
    users: Object.values(state.entities.users),
    dms: state.entities.dms,
  })
}

const mDTP = dispatch => {
  return ({
    createDM: (otherUserId) => dispatch(createDM(otherUserId)),
    closeModal: () => dispatch(closeModal())
  })
}

export default withRouter(connect(mSTP, mDTP)(UserModal));