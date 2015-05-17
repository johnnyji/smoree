class SessionController < ApplicationController
  before_action :require_login, only: [:destroy]

  def new
  end

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to user_path(user), notice: "Welcome back #{user.name}!"
    else
      flash.now.alert = "Email or password invalid!"
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "Logged out"
  end
end
