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

export const createDM = (otherUserId) => {
  return $.ajax({
    method: 'POST',
    url: '/api/direct_messages',
    data: { otherUserId }
  })
};

export const deleteDM = (dmId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/direct_messages/${dmId}`
  })
};