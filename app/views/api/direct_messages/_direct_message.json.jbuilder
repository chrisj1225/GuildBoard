json.extract! dm, :id

members = dm.members.select{ |member| member != current_user }
json.set! :other_user, members[0]