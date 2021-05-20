json.server do
  json.partial! '/api/servers/server', server: @server
end
json.members do
  @server.members.each do |member|
    json.set! member.id do
      json.partial! '/api/users/user', user: member
    end
  end
end
json.messages do 
  @server.messages.each do |message|
    json.set! message.id do 
      json.partial! 'api/messages/message', message: message
    end
  end
end
json.channels do
  @server.channels.each do |channel|
    json.set! channel.id do 
      json.partial! 'api/channels/channel', channel: channel
    end
  end
end