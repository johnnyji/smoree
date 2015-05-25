class SessionController < ApplicationController
  before_action :require_login, only: [:destroy]
  respond_to :html, :js

  def new
  end

  def create
    user = User.find_by(email: params[:email])
    respond_to do |format|
      if user && user.authenticate(params[:password])
        session[:user_id] = user.id
        format.html { redirect_to user_path(user), notice: "Welcome back #{user.name}!" }
      else
        #this isn't working   
        format.html { render :new }
        format.js
      end
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "Logged out"
  end
end
