import { connect } from 'react-redux';
import Login from './splash_form';
import { login } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
  return({
    user: {
      username: "",
      password: ""
    },
    formType: "Login"
  })
}

const mDTP = dispatch => {
  return({
    action: user => dispatch(login(user))
  })
}

export default connect(mSTP, mDTP)(Login);