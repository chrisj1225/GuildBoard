class Api::MembershipsController < ApplicationController

  def create 
    # debugger
    @membership = Membership.new(user_id: params[:user_id])
    if params.include?(:server_id)
      @membership.joinable_id = params[:server_id]
      @membership.joinable_type = "Server"
    else 
      # @membership.joinable_id = params[:dm_id]
      # @membership.joinable_type = "DM"
    end
    if @membership.save
      # render "/api/servers/#{params[:server_id]}"
    else
      render json: ["Something went wrong"], status: 404
    end

  end

  def destroy
    # debugger
    # if params.include?(:server_id)
    #   @membership = Membership.find_by(
    #     user_id: current_user.id, 
    #     joinable_id: params[:server_id],
    #     joinable_type: "Server"
    #   )
    # elsif params.include?(:dm_id)
    #   @membership = Membership.find_by(
    #     user_id: current_user.id, 
    #     joinable_id: params[:dm_id],
    #     joinable_type: "DM"
    #   )
    # end
    @membership = Membership.find(params[:id])
    if @membership && params.include(:server_id)
      @membership.destroy
      render "/api/servers/#{params[:server_id]}/users"
    elsif @membership && params.include(:dm_id)
      @membership.destroy
      render "/api/servers/#{params[:server_id]}/users"
    else
      render json: ["Something went wrong"], status: 404
    end
  end

  private

  # def membership_params
  #   params.require(:user).permit(:user_id)
  # end

end