import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ChatRoom from './ChatRoom';

const mSTP = (state, ownProps) => {
  // debugger
  return({
    chatType: "Channel",
    chat: state.entities.channels[ownProps.match.params.channelId],
    users: state.entities.users,
    currentUser: state.entities.users[state.session.session.id]
    // get messages from current channel to load
  })
}

// const mDTP = dispatch => {
//   return({

//   })
// }

export default withRouter(connect(mSTP, null)(ChatRoom));