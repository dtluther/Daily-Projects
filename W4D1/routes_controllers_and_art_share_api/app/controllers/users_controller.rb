class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  #This was also from the first project W4D1 routes and controllers.
  #We changed it below to the newer project (now just have a username)
  # def create
  #   user = User.new(params[:user].permit(:name, :email))
  #   user.save!
  #   render json: user
  # end
  # # In Postman, used keys user[name] and user[email] and values Ryan and
  # # not@aol.com respectively. Showed the correct result, but how is
  # # this actually nesting with user[key]...

  def create
    user = User.new(params[:user].permit(:username))
    if user.save
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    render json: User.find(params[:id])
  end

  def update
    user = User.find(params[:id])
    if user.update_attributes(user_params)
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    render json: user
  end

  private

  def user_params
    params.require(:user).permit(:username)
  end

end
