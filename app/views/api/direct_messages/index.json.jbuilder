@dms.each do |dm|
  json.set! dm.id do
    json.partial! 'api/direct_messages/direct_message', dm: dm
  end
end