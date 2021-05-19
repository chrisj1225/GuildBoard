import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MainChat from './MainChat';

const mSTP = (state, ownProps) => {
  const currentChannelId = ownProps.match.params.channelId
  return({
    currentChannelId: currentChannelId,
    currentChannel: state.entities.channels[currentChannelId]

  })
}

// const mDTP = dispatch => {
//   return({

//   })
// }

export default withRouter(connect(mSTP, null)(MainChat));