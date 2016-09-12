class Api::UsersController < ApplicationController
  # def index
  #     render json: User.all
  # end

  def create
    @user = User.new(user_params)
    @user.about = " "
    if @user.save
        login_user!(@user)
      render 'api/users/show'
    else
      render json: "Invalid User", status: 422
    end
  end

  def update
    @user = current_user
    if @user.update_attributes(user_params)
        render 'api/users/show'
    else
        render json: "Invalid attributes", status: 422
    end
  end

  def show
      @user = current_user
      render 'api/users/show'
  end

  def user_params
    params.require(:user).permit(:username,:password, :profile_pic, :about)
  end
end
