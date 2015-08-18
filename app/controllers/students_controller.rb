class StudentsController < ApplicationController

  def create
    student = Student.new
    student.create_with_account!(params[:student][:account])
    # send welcome email from smoree
    session[:user_id] = student.id
    render 'create.json.jbuilder', status: 201
  rescue ActiveRecord::RecordInvalid => e
    render_error_message(e)
  end

  def update #params: student
    student.update_with_account!(params[:student])
    render 'update.json.jbuilder', status: 201
  rescue ActiveRecord::RecordInvalid => e
    render_error_message(e)
  end

end
