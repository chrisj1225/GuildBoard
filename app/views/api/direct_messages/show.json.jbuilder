json.dm do
  json.partial! 'api/direct_messages/direct_message', dm: @dm
end
json.members do
  @dm.members.each do |member|
    json.set! member.id do
      json.partial! '/api/users/user', user: member
    end
  end
end
json.messages do 
  @dm.messages.each do |message|
    json.set! message.id do 
      json.partial! 'api/messages/message', message: message
    end
  end
end