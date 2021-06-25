user.direct_messages.each do |dm|
  json.set! dm.id do
    json.extract! dm, :id
    
    members = dm.members.select{ |member| member != current_user }
    json.set! :other_user, members[0]
  end

end