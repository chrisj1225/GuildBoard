class Api::ServersController < ApplicationController

  def index 
    user = User.find(params[:user_id])
    @servers = user.servers
    render "/api/servers/index"
  end

  def explore
    @servers = Server.all
    render "/api/servers/explore"
  end
  
  # def show
  #   @server = Server.find(params[:id])
  #   render "api/servers/show"
  # end

  def create
    # debugger
    @server = Server.new(server_params)
    @server.owner_id = current_user.id
    if @server.save
      @server.memberships.create(user_id: current_user.id)
      render "api/servers/show"
    end
  end

  def update
    # debugger
    @server = Server.find_by(id: params[:id])
    if @server && @server.update(server_params)
       render "/api/servers/show"
    else
      # check error messages
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find(params[:id])
    if current_user.id == @server.owner_id
      @server.destroy
      render "/api/servers/show"
    end
  end

  private

  def server_params
    params.require(:server).permit(:title)
  end

end