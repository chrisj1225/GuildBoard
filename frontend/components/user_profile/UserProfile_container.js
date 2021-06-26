import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/ui_actions';
import UserProfile from './UserProfile';

const mSTP = (state, ownProps) => {
  return({
    currentUser: state.entities.currentUser[state.session.user.id],
  })
}

const mDTP = dispatch => {
  return({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal))
  })
}

export default withRouter(connect(mSTP, mDTP)(UserProfile));