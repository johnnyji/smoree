class InstructorsController < ApplicationController
  before_action :require_user, only: %i(update destroy)

  def show #params: id
    @instructor = Instructor.with_associations.find(params[:id])
    render 'show.json.jbuilder'
  rescue ActiveRecord::RecordNotFound => e
    render_error_message("No instructor with id: #{params[:id]}", 404)
  end

  def create #params: instructor, account
    instructor = Instructor.new(instructor_params)
    instructor.create_with_account!(account_params)
    render json: { instructor: { id: instructor.id } }, status: 201
  rescue ActiveRecord::RecordInvalid => e
    render_error_message(e)
  end

  def update #params: instructor, account
    current_user.update_with_account!(instructor_params, account_params)
    render json: nil, status: 201
  rescue ActiveRecord::RecordInvalid => e
    render_error_message(e)
  end

  def destroy #params: id
    current_user.destroy
    session[:user_id] = nil
    render json: nil, status: 204
  end

  private

  def instructor_params
    params.require(:instructor).permit(:bio)
  end

  def account_params
    params.require(:account).permit(:first_name, :last_name, :email, :password, :password_confirmation, :profile_picture_url, :banner_picture_url)
  end

end
