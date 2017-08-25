class UsersController < ApplicationController

  before_action :require_current_user!

  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      redirect_to cats_url
    else
      render :new
    end
  end

  def user_params
    params.require(:user).permit(:user_name, :password)
  end
end
