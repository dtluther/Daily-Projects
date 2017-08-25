class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  helper_method :current_user

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_current_user!
    redirect_to cats_url if current_user
  end

  def destroy
    self.current_user.reset_session_token! if @current_user
    session[:session_token] = nil
  end
end
