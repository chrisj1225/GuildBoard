import { connect } from 'react-redux';
import Login from './login';
import { signup } from '../../actions/session_actions';

// const mSTP = (state, ownProps) => {
//   return({
//     currentUser: state.users[state.session.id]
//   })
// }

const mDTP = dispatch => {
  return({
    signup: user => dispatch(signup(user))
  })
}

export default connect(null, mDTP)(Signup);