export const addServerMember = (member_params) => {
  return $.ajax({
    method: 'POST',
    url: `/api/memberships`,
    data: { member: member_params}
  })
};

export const removeServerMember = (membershipId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/memberships/${membershipId}`
  })
}