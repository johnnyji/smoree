class StudentsController < ApplicationController
  
  def create
    student = Student.create(student_params)
  end

  private
  def student_pararms
    params.require(:student).permit(:first_name, :last_name, :email, :message, :user_id)
  end

end
