import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditUserForm from './EditUserForm';
import { editUser, clearErrors } from '../../../actions/session_actions';
import { closeModal } from '../../../actions/ui_actions';

const mSTP = (state, ownProps) => {
  const currentUser = state.entities.currentUser[state.session.session.id];
  return({
    user: {
      id: currentUser.id,
      email: currentUser.email,
      username: currentUser.username,
      password: ""
    },
    errors: state.errors
  })
}

const mDTP = dispatch => {
  return({
    editUser: user => dispatch(editUser(user)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal())
  })
}

export default withRouter(connect(mSTP, mDTP)(EditUserForm));