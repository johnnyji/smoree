class EmailsController < ApplicationController
  respond_to :json
  
  def index
    emails = Email.where(user_id: params[:user_id])
    render json: { emails: emails.to_json }, status: :ok
  end

  def create
    student_ids = params[:id_array]
    email = current_user.emails.build(body: params[:email])
    email.create_and_send(student_ids)
    render json: { student_count: student_ids.count }, status: :ok 
  end

end
