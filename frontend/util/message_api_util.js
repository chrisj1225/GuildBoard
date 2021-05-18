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

// export const fetchDMMessages = DMId => {
//   return $.ajax({
//     method: 'GET',
//     url: `/api/direct_messages/${DMId}/messages`
//   })
// }