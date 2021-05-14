
@servers.each do |server|
  json.set! server.id do
    json.partial! 'api/servers/server', server: server
    
    currentUserMembership = ""
    server.memberships.each do |membership|
      if membership.user_id == current_user.id 
        currentUserMembership = membership.id
      end
    end
  
    json.set! :membershipId, currentUserMembership
  end
end