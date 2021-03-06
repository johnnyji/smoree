class UsersController < ApplicationController
  before_action :require_login, only: [:edit, :update, :delete, :destroy, :show, :data]
  before_action :find_user, only: [:show, :edit, :update, :delete, :destroy, :data]
  respond_to :json, :html, :js

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    respond_to do |format|
      if @user.save
        session[:user_id] = @user.id
        format.html { redirect_to users_path(@user) }
        format.js
      else
        format.html { render :new }
        format.js
      end
    end
  end

  def show
    @courses = current_user.courses.all.order("created_at DESC")
  end

  def edit
    render json: { user: @user.to_json }, status: :ok
  end

  def update
    @user.update(user_params)
    if @user.save
      render json: { user: @user }, status: :ok
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
    redirect_to root_path, notice: "We're sorry to see you go!"
  end

  def data
    @students = @user.students
    @courses = @user.courses
  end

  def pictures
  end

  private

  def user_params
    params.require(:user).permit(
      :first_name, 
      :last_name, 
      :email, 
      :description, 
      :image_blob,
      :banner_blob,
      :password, 
      :password_confirmation
    )
  end

  def find_user
    @user = User.find(params[:id])
  end
end
