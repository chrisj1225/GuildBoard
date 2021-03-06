export const fetchServers = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/explore/servers'
  })
};

export const fetchServer = (serverId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/servers/${serverId}`
  })
};

export const createServer = (server) => {
  return $.ajax({
    method: 'POST',
    url: '/api/servers',
    data: { server }
  })
};

export const updateServer = (server) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/servers/${server.id}`,
    data: { server }
  })
};

export const deleteServer = (serverId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/servers/${serverId}`
  })
};

export const fetchUserServers = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/servers`
  })
};

export const fetchServerMembers = (serverId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/servers/${serverId}/users`
  })
};