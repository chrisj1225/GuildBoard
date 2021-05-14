class Api::ChannelsController < ApplicationController

  def index 
    server = User.find(params[:server_id])
    @channels = server.channels
    render "/api/channels/index"
  end
  
  def show
    @channel = Channel.find(params[:id])
    render "api/channels/show"
  end

  def create
    # debugger
    @channel = Channel.new(channel_params)
    @channel.owner_id = current_user.id
    @channel.server_id = params[:server_id]
    if @channel.save
      render "api/channels/show"
    end
  end

  def update
    # debugger
    @channel = Channel.find_by(id: params[:id])
    if @channel && @channel.update(channel_params)
       render "/api/channels/show"
    else
      # check error messages
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    if current_user.id == @channel.owner_id
      @channel.destroy
      render "/api/channels/show"
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:title)
  end

end