import { connect } from 'react-redux';
import Signup from './Signup';
import { signup, clearErrors } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
  return({
    user: {
      email: "",
      username: "",
      password: ""
    },
    formType: "Sign Up",
    errors: state.errors
  })
}

const mDTP = dispatch => {
  return({
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  })
}

export default connect(mSTP, mDTP)(Signup);
