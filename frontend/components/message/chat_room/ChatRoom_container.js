import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { getChannelMessages } from '../../../util/selectors'; 

import { receiveMessage, receiveChannelMessages } from '../../../actions/message_actions';
import { fetchServerInfo } from '../../../actions/server_actions';

import ChatRoom from './ChatRoom';

const mSTP = (state, ownProps) => {
  // debugger
  return({
    chatType: "Channel",
    chat: state.entities.channels[ownProps.match.params.channelId],
    currentServerId: ownProps.match.params.serverId,
    users: state.entities.users,
    currentUser: state.entities.currentUser[state.session.session.id],
    messages: getChannelMessages(state, ownProps.match.params.channelId)
    // get messages from current channel to load
  })
}

const mDTP = dispatch => {
  return({
    receiveMessage: message => dispatch(receiveMessage(message)),
    receiveChannelMessages: messages => dispatch(receiveChannelMessages(messages)),
    // fetchServerMembers: serverId => dispatch(fetchServerMembers(serverId)),
    // fetchChannelMessages: channelId => dispatch(fetchChannelMessages(channelId)),
    // fetchServerInfo: serverId => dispatch(fetchServerInfo(serverId))
  })
}

export default withRouter(connect(mSTP, mDTP)(ChatRoom));