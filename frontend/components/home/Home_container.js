import { connect } from 'react-redux';
import Home from './Home';

const mSTP = (state, ownProps) => {
  return({
    currentUser: state.entities.currentUser[state.session.session.id],
    currDmId: ownProps.match.params.dmId,
  })
}

// const mDTP = dispatch => {
//   return({
//   })
// }

export default connect(mSTP, null)(Home);