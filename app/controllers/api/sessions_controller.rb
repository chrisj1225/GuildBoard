class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:username],
      params[:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else 
      render json: ["Username or password is invalid"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["There is no user currently logged in"], status: 404
    end
  end
end