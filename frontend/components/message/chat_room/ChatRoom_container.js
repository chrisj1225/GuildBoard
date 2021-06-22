import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { getChannelMessages } from '../../../util/selectors'; 

import { receiveMessage, receiveChannelMessages, removeMessage } from '../../../actions/message_actions';
import { fetchServerInfo } from '../../../actions/server_actions';

import ChatRoom from './ChatRoom';

const mSTP = (state, ownProps) => {
  let chatType = ownProps.chatType;
  const messages = (chatType == "Channel") ? (
    getChannelMessages(state.entities.messages, ownProps.match.params.channelId)
  ) : (
    // filter DM messages only
    null
  )

  return({
    chatType,
    chat: state.entities.channels[ownProps.match.params.channelId],
    currentServerId: ownProps.match.params.serverId,
    users: state.entities.users,
    currentUser: state.entities.currentUser[state.session.session.id],
    messages
    // get messages from current channel to load
  })
}

const mDTP = dispatch => {
  return({
    receiveMessage: message => dispatch(receiveMessage(message)),
    receiveChannelMessages: messages => dispatch(receiveChannelMessages(messages)),
    removeMessage: messageId => dispatch(removeMessage(messageId))
    // fetchServerMembers: serverId => dispatch(fetchServerMembers(serverId)),
    // fetchChannelMessages: channelId => dispatch(fetchChannelMessages(channelId)),
    // fetchServerInfo: serverId => dispatch(fetchServerInfo(serverId))
  })
}

export default withRouter(connect(mSTP, mDTP)(ChatRoom));