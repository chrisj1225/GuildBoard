import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import MessageForm from './MessageForm';

const mSTP = (state, ownProps) => {
  return({
    message: {
      body: "",
      authorId: state.session.session.id
    },
    chat: state.entities.channels[ownProps.match.params.channelId]
  })
}

// const mDTP = dispatch => {
//   return({

//   })
// }

export default withRouter(connect(mSTP, null)(MessageForm))