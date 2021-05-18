class ChatChannel < ApplicationCable::Channel
  def subscribed # stream b/w clients & server
    stream_for 'chat_channel'
  end

  def speak(data)
    # convert data into Message instance
    message = Message.create(body: data['message'])
    socket = { message: message.body }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed; end

end