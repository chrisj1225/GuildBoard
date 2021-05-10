import { connect } from 'react-redux';
import Login from './login';
import { login } from '../../actions/session_actions';

// const mSTP = (state, ownProps) => {
//   return({
//     currentUser: state.users[state.session.id]
//   })
// }

const mDTP = dispatch => {
  return({
    login: user => dispatch(login(user))
  })
}

export default connect(null, mDTP)(Login);