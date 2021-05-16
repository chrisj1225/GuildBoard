# debugger
Server.all.each do |server|
  json.set! server.id do
    json.extract! server, :id, :title, :owner_id

    currentUserMembership = ""
    server.memberships.each do |membership|
      if membership.user_id == current_user.id 
        currentUserMembership = membership.id
      end
    end
  
    json.set! :membershipId, currentUserMembership
  end
end