import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import MessageForm from './MessageForm';

const mSTP = (state, ownProps) => {
  const chat = (ownProps.chatType == "Channel") ? (
    state.entities.channels[ownProps.match.params.channelId]
  ) : (
    state.entities.dms[ownProps.match.params.dmId]
  )

  return({
    message: {
      body: "",
      authorId: state.session.user.id
    },
    chat,
    chatType: ownProps.chatType,
  })
}

// const mDTP = dispatch => {
//   return({

//   })
// }

export default withRouter(connect(mSTP, null)(MessageForm))