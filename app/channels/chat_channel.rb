class ChatChannel < ApplicationCable::Channel
  def subscribed 
    # gets params from App.cable.subscriptions.create()
    # create stream for individual channel or dm instance
    chat_type = params[:type]
    @chat = chat_type.constantize.find_by(id: params[:chatId])
    stream_for @chat if @chat
  end

  def speak(data)
    if data["message"]["delete"]
      message = Message.find(data["message"]["messageId"])
      message.destroy
      socket = {
        message: {
          id: message.id
        },
        type: 'remove_message',
      }
    else 
      # convert data into Message instance
      @message = Message.new(
      body: data['message']['body'],
      author_id: data['message']['authorId'],
      messageable_id: @chat.id,
      messageable_type: @chat.class.to_s
      )
      if @message.save
        socket = { 
          message: {
            id: @message.id,
            body: @message.body,
            authorId: @message.author_id,
            messageableId: @message.messageable_id,
            messageableType: @message.messageable_type,
            createdAt: @message.created_at,
            author: @message.author
          },
          type: 'receive_message'
        }
      end
    end
    ChatChannel.broadcast_to(@chat, socket)
  end

  # def load
  #   # messages = @chat.messages
  #   messages = Message
  #     .where(messageable_type: @chat.class.to_s, messageable_id: @chat.id)
  #     .order(:created_at)
  #     .limit(50)
  #   # debugger
  #   messages = camelize(messages)
  #   socket = { messages: messages, type: 'receive_messages' }
  #   ChatChannel.broadcast_to(@chat, socket)
  # end

  # def camelize(objArr) 
  #   objArr.map { |obj| camelize_keys(obj.attributes) }
  # end

  # def camelize_keys(hash)
  #   pairs = hash.map { |k, v| [k.camelize(:lower), v] }
  #   Hash[pairs]
  # end

  # def unsubscribed; end

end