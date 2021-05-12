class Api::MembershipsController < ApplicationController

  def create 
    @membership = Membership.new(membership_params)
    if params.include?(:server_id)
      @membership.joinable_id = params[:server_id]
      @membership.joinable_type = "Server"
    else 
      # @membership.joinable_id = params[:dm_id]
      # @membership.joinable_type = "DM"
    end
    if @membership.save
      render "api/servers/#{params[:server_id]}/"
    else
      render json: ["Something went wrong"], status: 404
    end

  end

  def destroy
    @membership = Membership.find_by(
      user_id: current_user.id, 
      joinable_id: params[:membership][:joinable_id],
      joinable_type: params[:membership][:joinable_type]
    )
    if @membership
      @membership.destroy
    else
      render json: ["Something went wrong"], status: 404
    end
  end

  private

  def membership_params
    params.require(:membership).permit(:user_id)
  end

end