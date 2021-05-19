import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ChatRoom from './ChatRoom';

const mSTP = (state, ownProps) => {
  // debugger
  return({
    chatType: "Channel",
    chatId: ownProps.match.params.channelId,
    // get messages from current channel to load
  })
}

// const mDTP = dispatch => {
//   return({

//   })
// }

export default withRouter(connect(mSTP, null)(ChatRoom))