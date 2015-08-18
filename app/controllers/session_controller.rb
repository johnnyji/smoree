class SessionController < ApplicationController
  before_action :require_user, only: %i(destroy)

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: nil, status: 201
    else
      render json: { message: 'Invalid Username/Password' }, status: 422
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "Logged out"
  end
  
end
