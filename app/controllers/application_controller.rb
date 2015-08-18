class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :deep_snake_case_params!
  helper_method :current_user

  def render_error_message(error, status = 422)
    if error.is_a? String
      render json: { message: error }, status: status
    elsif error.nil?
      render json: nil, status: status
    else
      render json: { message: error.record.errors.messages.values.flatten.first }, status: status
    end
  end

  def deep_snake_case_params!(val = params)
    case val
    when Array
      val.map {|v| deep_snake_case_params! v }
    when Hash
      val.keys.each do |k, v = val[k]|
        val.delete k
        val[k.underscore] = deep_snake_case_params!(v)
      end
      val
    else
      val
    end
  end

  def require_user
    redirect_to root_path, notice: 'Please login to view this content' if current_user.nil?
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  rescue ActiveRecord::RecordNotFound
  end

end
