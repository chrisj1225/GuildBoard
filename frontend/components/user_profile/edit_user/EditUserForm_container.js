import { connect } from 'react-redux';
import EditUserForm from './EditUserForm';
import { editUser, clearErrors } from '../../../actions/session_actions';

const mSTP = (state, ownProps) => {
  const currentUser = state.entities.currentUser[state.session.session.id];
  return({
    user: {
      email: currentUser.email,
      username: currentUser.username
    },
    errors: state.errors
  })
}

const mDTP = dispatch => {
  return({
    editUser: user => dispatch(editUser(user)),
    clearErrors: () => dispatch(clearErrors())
  })
}

export default connect(mSTP, mDTP)(EditUserForm);