export const fetchChannelMessages = channelId => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${channelId}/messages`
  })
}

export const createMessage = message => {
  return $.ajax({
    method: 'POST',
    url: '/api/messages',
    data: { message }
  })
}

export const fetchDMMessages = dmId => {
  return $.ajax({
    method: 'GET',
    url: `/api/direct_messages/${dmId}/messages`
  })
}