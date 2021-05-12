class Api::ServersController < ApplicationController

  def index 
    @servers = Server.all
    render "/api/servers/index"
  end

  def users
    @server = Server.find_by(id: params[:server_id])
    @users = @server.members
    if @users
      render "/api/servers/show"
    else 
      render json: ["That server does not exist"], status: 404
    end
  end

  def show
    @server = Server.find(params[:id])
  end

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id
    if @server.save
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
    if current_user.id == @server.owner.id
      @server.destroy
      render "/api/servers/show"
    end
  end

  private

  def server_params
    params.require(:server).permit(:title, :description)
  end

end