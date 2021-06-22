import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { openModal } from '../../../actions/ui_actions';
import DMSidebarList from './DMSidebarList';

const mSTP = (state, ownProps) => {
  return({
    currentUser: state.entities.currentUser[state.session.session.id],
  })
}

const mDTP = dispatch => {
  return({
    openModal: (modal) => dispatch(openModal(modal)),
  })
}

export default withRouter(connect(mSTP, mDTP)(DMSidebarList));