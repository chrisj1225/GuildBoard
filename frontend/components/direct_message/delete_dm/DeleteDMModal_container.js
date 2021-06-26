import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteDM } from '../../../actions/dm_actions';
import { closeModal } from '../../../actions/ui_actions';
import DeleteDMModal from './DeleteDMModal';

const mSTP = (state, ownProps) => {
  return({
    currentUser: state.entities.currentUser[state.session.user.id],
  })
}

const mDTP = dispatch => {
  return ({
    deleteDM: (dmId) => dispatch(deleteDM(dmId)),
    closeModal: () => dispatch(closeModal())
  })
}

export default withRouter(connect(mSTP, mDTP)(DeleteDMModal));