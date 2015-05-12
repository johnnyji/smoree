class CoursesController < ApplicationController
  before_action :require_login, only: [:new, :create, :edit, :update, :delete, :destroy]
  before_action :find_course, only: [:show, :edit, :udpate, :delete, :destroy]
  
  def index
  end

  def show
  end

  def new
    @course = Course.new
  end

  def create
    @course = Course.new(course_params)
    if @course.save
      render json: { course_id: @course.id }
    else
      render json: { errors: @course.errors }, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
  end

  def delete
  end

  def destroy
  end

  def search
    Course.search(params[:query])
  end

  private

  def course_params
    params.require(:course).permit(:title, :location, :start_date, :end_date, :summary, :description, :user_id, :image_url, :latitude, :longitude)
  end

  def find_course
    @course = Course.find(params[:id])
  end
end
