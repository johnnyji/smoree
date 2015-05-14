class StudentsController < ApplicationController
  before_action :require_login, only: [:mail, :mail_all]
  respond_to :json

  def create
    student = Student.new(student_params)
    if student.save
      StudentMailer.welcome_email(student, student.course).deliver
      render json: { first_name: student.first_name.capitalize }, status: :ok
    else
      render json: { errors: student.errors.to_json }, status: :unprocessable_entity
    end
  end

  def mail
    @students = Student.where(id: params[:id_array])
    body = params[:email]
    @students.each do |student| 
      StudentMailer.teacher_email(student, student.course, body).deliver
    end
    render json: { student_count: @students.count }, status: :ok
  end

  def mail_all
    subject = params[:subject]
    body = params[:email]
    current_user.students.each do |student|
      StudentMailer.teacher_email_all(student, subject, body).deliver
    end
  end

  private

  def student_params
    params.require(:student).permit(:first_name, :last_name, :email, :intro_message, :course_id)
  end
end
