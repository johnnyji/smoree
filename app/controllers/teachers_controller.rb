class TeachersController < ApplicationController
  before_action :find_teacher, only: [:show, :edit, :update, :delete, :destroy]
  respond_to :json

  def new
    @user = User.new
  end

  def create
    @teacher = Teacher.create
    @user = @teacher.build_user(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: { user: @user.to_json }, status: :ok
    else
      render json: { user: @user.errors.to_json }, status: :unprocessable_entity
    end
  end

  def show
    @courses = @teacher.courses.all.order("created_at DESC")
  end

  def edit
  end

  def update
    @teacher.update(user_params)
    if @teacher.save
      redirect_to teacher_path(@teacher), notice: "You've succesfully updated your profile"
    else
      flash.now.notice = "Something went wrong"
      render :edit
    end
  end

  def delete
  end

  def destroy
    @teacher.destroy
    redirect_to root_path, notice: "We're sorry to see you go!"
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end

  def find_teacher
    @teacher = Teacher.find(params[:id])
  end

  def find_teacher_account
    @teacher = User.where(account_type: "Teacher").find(params[:id])
  end
end