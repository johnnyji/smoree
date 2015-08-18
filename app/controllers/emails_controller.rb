class EmailsController < ApplicationController
  
  def index
    @emails = Email.where(user_id: params[:user_id]).order("created_at DESC")
    @emails_by_month = @emails.group_by { |e| e.created_at.strftime("%b %d %Y") }
  end

  def create
    student_ids = params[:id_array]
    course_id = params[:course_id]
    email = current_user.emails.build(body: params[:email])
    email.course_id = course_id if course_id
    email.save_and_send(student_ids)
    render json: { student_count: student_ids.count }, status: :ok 
  end

end
