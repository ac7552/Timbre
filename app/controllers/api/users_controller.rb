class Api::UsersController < ApplicationController
  # def index
  #     render json: User.all
  # end

  def create
    @user = User.new(user_params)
    if @user.save
        login_user!(@user)
      render 'api/users/show'
    else
      render json: "Invalid User", status: 422
    end
  end



  def user_params
    params.require(:user).permit(:username,:password)
  end
end
