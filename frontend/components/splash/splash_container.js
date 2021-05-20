import { connect } from 'react-redux';
import Splash from './Splash';
import { logout } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
  // debugger
  return({
    currentUser: state.entities.currentUser[state.session.session.id]
  })
}

const mDTP = dispatch => {
  return({
    logout: () => dispatch(logout())
  })
}

export default connect(mSTP, mDTP)(Splash);