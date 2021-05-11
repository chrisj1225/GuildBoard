import { connect } from 'react-redux';
import Login from './Login';
import { login } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
  return({
    user: {
      username: "",
      password: ""
    },
    formType: "Login",
    errors: state.errors.session
  })
}

const mDTP = dispatch => {
  return({
    login: user => dispatch(login(user))
  })
}

export default connect(mSTP, mDTP)(Login);