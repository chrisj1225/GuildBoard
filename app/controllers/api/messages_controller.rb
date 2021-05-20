class Api::MessagesController < ApplicationController 

  def index 
    if params[:channel_id]
      @channel = Channel.find_by(id: params[:channel_id])
      @messages = @channel.messages
      render :index
    end

  end

  # def create 
  #   message = Message.new(message_params)
  #   if message.save
  #     if message.messageable_type == "Channel"
  #       # render to websocket
  #     else
  #       # render to websocket
  #     end
  #   else
  #     render json: @message.errors.full_messages, status: 422
  #   end
  # end
  
  def update # bonus
    @message = Message.find(params[:id])
    if @message 
      if @message.author_id == current_user.id
        if @message.update(message_params)
          # render to websocket
        else
          render json: @message.errors.full_messages, status: 422
        end
      else 
        render json: ["You do not have permission to do that"], status: 401
      end
    else
      render json: ["The message you are trying to edit does not exist"], status: 401
    end
  end

  def destroy #bonus
    @message = Message.find(params[:id])
    if @message && @message.author_id == current_user.id
      @message.destroy
      # render to websocket
    else
      render json: ["There was an error"], status: 401
    end
  end

  private

  def message_params
    # Consider: if messages#create is nested under channels & DM routes
    # can change strong params to just :body
    params.require(:message).permit(:body, :author_id, :messageable_id, :messageable_type)
  end

  # message_params
  # this.state = {
  #   body: 'hello!'
  #   author_id: 1,
  #   messageable_id: 2
  #   messageable type: 'Channel'
  # }

end