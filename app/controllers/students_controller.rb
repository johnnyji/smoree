class StudentsController < ApplicationController
  before_action :require_login, only: [:mail, :mail_all]
  respond_to :json

  def create
    student = Student.new(student_params)
    if student.save
      StudentMailer.welcome_email(student, student.course).deliver
      render json: { first_name: student.first_name.capitalize }, status: :ok
    else
      # this gets the first error key value pair in an array, the second is the actual error message
      render json: { error: student.errors.first.second }, status: :unprocessable_entity
    end
  end

  def mail
    students = Student.where(id: params[:id_array])
    students.each do |student| 
      StudentMailer.teacher_email(student, student.course, params[:subject], params[:email]).deliver
    end
    render json: { student_count: students.count }, status: :ok
  end

  private

  def student_params
    params.require(:student).permit(:first_name, :last_name, :email, :intro_message, :course_id)
  end
end
