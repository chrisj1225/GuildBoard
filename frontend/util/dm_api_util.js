export const fetchDM = (dmId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/direct_messages/${dmId}`
  })
};

export const fetchUserDMs = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/direct_messages`
  })
};

export const createDM = (otherUser) => {
  return $.ajax({
    method: 'POST',
    url: '/api/direct_messages',
    data: { otherUser }
  })
};

export const deleteDM = (dmId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/direct_messages/${dmId}`
  })
};