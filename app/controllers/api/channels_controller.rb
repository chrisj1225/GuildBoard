class Api::ChannelsController < ApplicationController

  def index 
    # debugger
    server = Server.find(params[:server_id])
    @channels = server.channels
    render "/api/channels/index"
    # debugger    
  end

  def all
    @channels = Channel.all
    render "/api/channels/all"
  end
  
  def show
    @channel = Channel.find(params[:id])
    render "api/channels/show"
  end

  def create
    @channel = Channel.new(channel_params)
    # @channel.owner_id = current_user.id
    # debugger
    # @channel.server_id = params[:server_id]
    if @channel.save
      render "api/channels/show"
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
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
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:title, :server_id, :owner_id)
  end

end