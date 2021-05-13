class Api::MembershipsController < ApplicationController

    
  def create
    membership = Membership.new(membership_params)
    if membership.save
      if membership.joinable_type == "Server"
        @server = membership.joinable
        render "api/server/show"
      end
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
    # elsif @membership && params.include(:dm_id)
    #   @membership.destroy
    #   render "/api/servers/#{params[:dm_id]}/users"
    else
      render json: ["Something went wrong"], status: 404
    end
  end

  private

  def membership_params
    params.require(:member).permit(:user_id, :joinable_id, :joinable_type)
  end

  # member_params
  # this.state = {
  #   user_id: 2,
  #   joinable_id: 2
  #   joinable type: 'Server'
  # }

end