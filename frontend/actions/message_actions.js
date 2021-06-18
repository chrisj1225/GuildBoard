import * as MessageAPIUtil from '../util/message_api_util';

export const RECEIVE_CHANNEL_MESSAGES = "RECEIVE_CHANNEL_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

export const receiveChannelMessages = messages => {
  return ({
    type: RECEIVE_CHANNEL_MESSAGES,
    messages
  })
}

export const receiveMessage = message => {
  return ({
    type: RECEIVE_MESSAGE,
    message
  })
}

export const removeMessage = messageId => {
  return ({
    type: REMOVE_MESSAGE,
    messageId
  })
}

export const fetchChannelMessages = channelId => dispatch => {
  return MessageAPIUtil.fetchChannelMessages(channelId)
    .then(messages => dispatch(receiveChannelMessages(messages)))
}

export const createMessage = message => dispatch => {
  return MessageAPIUtil.createMessage(message)
    .then(message => dispatch(receiveMessage(message)))
}