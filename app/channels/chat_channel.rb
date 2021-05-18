class ChatChannel < ApplicationCable::Channel
  def subscribed 
    chat_type = params[:type]
    @chat = chat_type.constantize.find_by(id: params[:chatId])
    stream_for @chat if @chat
  end

  def speak(data)
    # convert data into Message instance
    @message = Message.new(
      body: data['message'],
      author_id: @chat.author_id,
      messageable_id: @chat.class.to_s,
      messageable_type: @chat.id
    )
    if @message.save
      socket = { 
        message: {
          id: @message.id,
          body: @message.body,
          authorId: @message.author_id,
          messageableId: @message.messageable_id,
          messageableType: @message.messageable_type,
          createdAt: @message.created_at
        }
      }
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end

  def load(messageable_id)
    messages =  Message
      .where("messageable_id = #{messageable_id}")
      .order('created_at DESC')
      .collect(&:body)

    socket = { messages: messages, type: 'messages' }
     ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed; end

end