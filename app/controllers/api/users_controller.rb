class Api::UsersController < ApplicationController 
  
  def index
    server = Server.find(params[:server_id])
    @users = server.members
    render "api/users/index"
  end

  def create
    @user = User.new(user_params)
    
    if @user.save
      login(@user)
      @user.memberships.create(user_id: @user.id, joinable_id: 1, joinable_type: 'Server')
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user && @user.update(user_params)
      render "api/users/show"
    else
      render json: ["Username is taken or password is invalid"], status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end

end