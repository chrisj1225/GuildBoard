# debugger
Server.all.each do |server|
  json.set! server.id do
    json.extract! server, :id, :title, :owner_id
  end
end