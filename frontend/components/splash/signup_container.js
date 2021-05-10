import { connect } from 'react-redux';
import SplashForm from './splash_form';
import { signup } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
  return({
    user: {
      email: "",
      username: "",
      password: ""
    },
    formType: "Sign Up"
  })
}

const mDTP = dispatch => {
  return({
    action: user => dispatch(signup(user))
  })
}

export default connect(mSTP, mDTP)(SplashForm);
