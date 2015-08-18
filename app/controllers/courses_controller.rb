class CoursesController < ApplicationController
  before_action :require_user, only: %i(create update destroy)
  before_action :find_course, only: %i(show update destroy)
  
  def index
  end

  def show
  end

  def create
    @course = current_user.courses.create!(course_params)
    render json: { course: { id: @course.id } }, status: 201
  rescue ActiveRecord::RecordInvalid => e
    render_error_message(e)
  end

  def update
    @course.update!(course_params)
    render json: { course: { id: @course.id } }, status: 201
  rescue ActiveRecord::RecordInvalid => e
    render_error_message(e)
  end

  def destroy
    @course.destroy
    render json: nil, status: 204
  end

  def info
  end

  # def data
  #   range_of_days = ConvertToDateObject.call(params[:range_of_days])
  #   @views_per_day = RetrieveViewsPerDay.call(@course, range_of_days)
  #   @signups_per_day = RetrieveSignupsPerDay.call(@course, range_of_days)
  #   render json: { views: @views_per_day.to_json, signups: @signups_per_day.to_json }, status: :ok 
  # end

  private

  def course_params
    params.require(:course).permit(:title, :location, :start_date, :end_date, :summary, :description, :image_url, :latitude, :longitude, :welcome_email_id, :slug)
  end

  def find_course
    if request.subdomain.present? && request.subdomain != "www"
      begin
        @course = Course.find_by!(slug: request.subdomain)
      rescue ActiveRecord::RecordNotFound
        redirect_to root_url(subdomain: false), notice: "Sorry, that course wasn't found!"
      end
    else
      @course = Course.find(params[:id])
    end
  end

end
