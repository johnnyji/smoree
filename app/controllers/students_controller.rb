class StudentsController < ApplicationController
  respond_to :json

  def create
    student = Student.new(student_params)
    if student.save
      render json: { first_name: student.first_name.capitalize }, status: :ok
    else
      render json: { errors: student.errors.to_json }, status: :unprocessable_entity
    end
  end

  private

  def student_params
    params.require(:student).permit(:first_name, :last_name, :email, :intro_message, :course_id)
  end
end
