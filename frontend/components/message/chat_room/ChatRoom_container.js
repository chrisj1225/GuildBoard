import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {fetchChannelMessages} from '../../../actions/message_actions';

import ChatRoom from './ChatRoom';

const mSTP = (state, ownProps) => {
  // debugger
  return({
    chatType: "Channel",
    chat: state.entities.channels[ownProps.match.params.channelId],
    users: state.entities.users,
    currentUser: state.entities.users[state.session.session.id],
    messages: Object.values(state.entities.messages)
    // get messages from current channel to load
  })
}

const mDTP = dispatch => {
  return({
    fetchChannelMessages: channelId => dispatch(fetchChannelMessages(channelId))
  })
}

export default withRouter(connect(mSTP, mDTP)(ChatRoom));