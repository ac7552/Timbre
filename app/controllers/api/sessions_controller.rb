class Api::SessionsController < ApplicationController
  # before_action :require_signed_out!, only: [:new, :create]
  # before_action :require_signed_in!, only: [:destroy]



  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    
    if @user
      login_user!(@user)
      render 'api/users/show'
    else
      render json: "Invalid User", status: 422
    end
  end

  def destroy
    sign_out
    render json: {}
  end

end
