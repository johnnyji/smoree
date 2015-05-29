class StudentsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :require_login, only: [:mail, :mail_all]
  respond_to :json

  def create
    student = Student.new(student_params)
    if student.save
      StudentMailer.delay.welcome_email(student, student.course)
      render json: { first_name: student.first_name.capitalize }, status: :ok
    else
      # this gets the first error key value pair in an array, the second is the actual error message
      render json: { error: student.errors.first.second }, status: :unprocessable_entity
    end
  end

  private

  def student_params
    params.require(:student).permit(:first_name, :last_name, :email, :intro_message, :course_id)
  end
end
