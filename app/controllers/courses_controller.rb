class CoursesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:show]
  before_action :require_login, only: [:new, :create, :edit, :update, :delete, :destroy]
  before_action :find_course, only: [:show, :edit, :update, :delete, :destroy, :info, :data]
  respond_to :json, :html
  
  def index
  end

  def show
    @course.views.create
  end

  def new
    @course = Course.new
  end

  def create
    @course = current_user.courses.build(course_params)
    if @course.save
      render json: { course_id: @course.id }
    else
      render json: { errors: @course.errors }, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @course.update(course_params)
      render json: { course_id: @course.id }
    else
      render json: { errors: @course.errors }, status: :unprocessable_entity
    end
  end

  def delete
  end

  def destroy
    @course.destroy
    render json: nil, status: :ok
  end

  def info
  end

  def data
    range_of_days = ConvertToDateObject.call(params[:range_of_days])
    @views_per_day = RetrieveViewsPerDay.call(@course, range_of_days)
    @signups_per_day = RetrieveSignupsPerDay.call(@course, range_of_days)
    render json: { views: @views_per_day.to_json, signups: @signups_per_day.to_json }, status: :ok 
  end

  private

  def course_params
    params.require(:course).permit(:title, :location, :start_date, :end_date, :summary, :description, :image_url, :latitude, :longitude, :welcome_email, :slug)
  end

  def find_course
    if request.subdomain.present?
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
