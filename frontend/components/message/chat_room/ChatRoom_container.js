import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { getChannelMessages, getDMMessages } from '../../../util/selectors'; 

import { receiveMessage, receiveChannelMessages, removeMessage } from '../../../actions/message_actions';
import { fetchServerInfo } from '../../../actions/server_actions';

import ChatRoom from './ChatRoom';

const mSTP = (state, ownProps) => {
  let chatType = ownProps.chatType;
  let messages;
  let chat;
  if (chatType == "Channel") {
    let channelId = ownProps.match.params.channelId;
    messages = getChannelMessages(state.entities.messages, channelId)

    chat = state.entities.channels[channelId]
  } else {
    let dmId = ownProps.match.params.dmId;
    messages = getDMMessages(state.entities.messages, dmId)

    chat = state.entities.dms[dmId]
  }

  return({
    chatType,
    chat,
    messages,
    currentUser: state.entities.currentUser[state.session.session.id],
    currentServerId: ownProps.match.params.serverId,
    users: state.entities.users,
    // get messages from current channel to load
  })
}

const mDTP = dispatch => {
  return({
    receiveMessage: message => dispatch(receiveMessage(message)),
    receiveChannelMessages: messages => dispatch(receiveChannelMessages(messages)),
    removeMessage: messageId => dispatch(removeMessage(messageId))
  })
}

export default withRouter(connect(mSTP, mDTP)(ChatRoom));