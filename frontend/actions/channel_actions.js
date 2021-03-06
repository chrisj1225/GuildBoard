import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const CLEAR_CHANNEL_ERRORS = 'CLEAR_CHANNEL_ERRORS';

export const receiveAllChannels = channels => {
  return({
    type: RECEIVE_ALL_CHANNELS,
    channels
  })
} 

export const receiveChannels = channels => {
  return({
    type: RECEIVE_CHANNELS,
    channels
  })
}

export const receiveChannel = channel => {
  return({
    type: RECEIVE_CHANNEL,
    channel
  })
}

export const removeChannel = (channelId) => {
  return({
    type: REMOVE_CHANNEL,
    channelId
  })
}

export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_CHANNEL_ERRORS,
    errors
  })
};

export const clearErrors = () => {
  return ({
    type: CLEAR_CHANNEL_ERRORS
  })
};

export const fetchAllChannels = () => dispatch => {
  return ChannelAPIUtil.fetchAllChannels()
    .then(channels => dispatch(receiveAllChannels(channels)),
    err => dispatch(receiveErrors(err.responseJSON)))
}

export const fetchChannels = (serverId) => dispatch => {
  return ChannelAPIUtil.fetchChannels(serverId)
    .then(channels => dispatch(receiveChannels(channels)),
    err => dispatch(receiveErrors(err.responseJSON)))
}

export const fetchChannel = (channelId) => dispatch => {
  return ChannelAPIUtil.fetchChannel(channelId)
    .then(channel => dispatch(receiveChannel(channel)),
    )
}

export const createChannel = (channel) => dispatch => {
  return ChannelAPIUtil.createChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)),
    err => dispatch(receiveErrors(err.responseJSON)))
}

export const updateChannel = (channel) => dispatch => {
  return ChannelAPIUtil.updateChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)),
    err => dispatch(receiveErrors(err.responseJSON)))
}

export const deleteChannel = (channelId) => dispatch => {
  return ChannelAPIUtil.deleteChannel(channelId)
    .then(() => dispatch(removeChannel(channelId)),
    err => dispatch(receiveErrors(err.responseJSON)))
}