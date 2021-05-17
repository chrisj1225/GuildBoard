Channel.all.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :title, :server_id, :owner_id
  end
end
