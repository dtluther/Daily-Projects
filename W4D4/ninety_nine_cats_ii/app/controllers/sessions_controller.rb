class SessionsController < ApplicationController

  before_action :require_current_user!

  def new
    render :new
  end

  def create
    user = User.find_by_credentials(params[:user][:user_name], params[:user][:password])
    # session[:session_token] = user.reset_session_token!

    if user.nil?
      render json: 'Credentials were wrong'
    else
      login!(user)
      redirect_to users_url(user)
    end
  end

end
