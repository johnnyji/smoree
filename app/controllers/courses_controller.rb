class CoursesController < ApplicationController
  before_action :require_login, only: [:new, :create, :edit, :update, :delete, :destroy]
  before_action :find_course, only: [:show, :edit, :update, :delete, :destroy, :info]
  
  def index
  end

  def show
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
    binding.pry
  end

  def destroy
    @course.destroy
    render nothing: true, status: :ok
  end

  def info

  end

  def search
    Course.search(params[:query])
  end

  private

  def course_params
    params.require(:course).permit(:title, :location, :start_date, :end_date, :summary, :description, :image_url, :latitude, :longitude, :welcome_email, :slug)
  end

  def find_course
    if request.subdomain.present?
      @course = Course.find_by!(slug: request.subdomain)
    else
      @course = Course.find(params[:id])
    end
  end
end
