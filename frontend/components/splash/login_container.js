import { connect } from 'react-redux';
import Login from './Login';
import { login, clearErrors } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
  return({
    user: {
      username: "",
      password: ""
    },
    formType: "Login",
    errors: state.errors
  })
}

const mDTP = dispatch => {
  return({
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  })
}

export default connect(mSTP, mDTP)(Login);