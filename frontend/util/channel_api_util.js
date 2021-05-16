export const fetchAllChannels = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/all/channels`
  })
};

export const fetchChannels = (serverId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/servers/${serverId}/channels`
  })
};

export const fetchChannel = (channelId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${channelId}`
  })
};

export const createChannel = (serverId, channel) => {
  return $.ajax({
    method: 'POST',
    url: `/api/servers/${serverId}/channels`,
    data: { channel }
  })
};

export const updateChannel = (channelId, channel) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/channels/${channelId}`,
    data: { channel }
  })
};

export const deleteChannel = (channelId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/channels/${channelId}`
  })
};