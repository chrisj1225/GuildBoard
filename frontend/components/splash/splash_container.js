import { connect } from 'react-redux';
import Splash from './splash';
import { logout } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
  return({
    currentUser: state.users[state.session.id]
  })
}

const mDTP = dispatch => {
  return({
    logout: () => dispatch(logout())
  })
}

export default connect(null, mDTP)(Splash);