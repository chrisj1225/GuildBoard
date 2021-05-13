export const addServerMember = (member_params) => {
  return $.ajax({
    method: 'POST',
    url: `/api/memberships`,
    data: { member: member_params}
  })
};