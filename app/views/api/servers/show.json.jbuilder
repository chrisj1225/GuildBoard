# json.server do
  json.partial! '/api/servers/server', server: @server
# end
# json.members do
#   @server.members.each do |member|
#     json.set! member.id do
#       json.partial! '/api/users/user', user: member
#     end
#   end
# end
# json.channels do
#   json.extract! @server, @server.channels
# end