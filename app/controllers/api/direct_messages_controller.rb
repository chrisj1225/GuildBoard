class Api::DirectMessagesController < ApplicationController

  def index 
    user = User.find(params[:user_id])
    @dms = user.direct_messages
    render "/api/direct_messages/index"
  end

  def show 
    @dm = DirectMessage.find(params[:id])
    render "/api/direct_messages/show"
  end

  def create
    # debugger
    # other_user = User.find_by(id: params[:otherUserId])
    # current_user.direct_messages.each do |dm|
    #   if dm.members.include?(other_user)
    #     render json: ["Direct message with this user already exists"], status: 404
    #     break
    #   end
    # end

    @dm = DirectMessage.new()
    if @dm.save
      curr_user = {
        user_id: current_user.id,
        joinable_id: @dm.id,
        joinable_type: "DirectMessage"
      }
      other_user = {
        user_id: params[:otherUserId],
        joinable_id: @dm.id,
        joinable_type: "DirectMessage"
      }
      Membership.create(curr_user)
      Membership.create(other_user)
      render "api/direct_messages/show"
    else 
      render json: ["Direct message with this user already exists"], status: 404
    end
  end

  def destroy
    @dm = DirectMessage.find(params[:id])
    if @dm
      @dm.destroy
      render "/api/direct_messages/show"
    end
  end

  private

  # def dm_params
  #   params.require(:dm).permit(:other_user_id)
  # end

end