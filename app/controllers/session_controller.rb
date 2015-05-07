class SessionController < ApplicationController
  
  def new
  end

  def create
    user = login(params[:email], params[:password])
    if user
      redirect_back_or_to root_url, notice: "Welcome back #{user.name}!"
    else
      flash.now.alert = "Email or password invalid!"
      render :new
    end
  end

  def destroy
    logout
    redirect_to root_url, notice: "Logged out"
  end
end
