class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  respond_to :html, :js, :json
  protect_from_forgery with: :exception

  private

  def logged_in?
    current_user != nil
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  rescue ActiveRecord::RecordNotFound
  end

  def require_login
    unless current_user
      redirect_to new_session_path, alert: "You must be logged in first!"
    end
  end

  helper_method :current_user, :logged_in?
end
