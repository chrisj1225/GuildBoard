json.extract! server, :id, :title, :owner_id
genChanId = ""
server.channels.each do |channel|
  if channel.title == 'general'
    genChanId = channel.id
  end
end
json.set! :genChanId, genChanId

currentUserMembership = ""
server.memberships.each do |membership|
  if membership.user_id == current_user.id 
    currentUserMembership = membership.id
  end
end
json.set! :membershipId, currentUserMembership