class CoursesController < ApplicationController
  skip_before_action :require_login, only: [:search, :show, :index]
  before_action :find_course, only: [:show, :new, :create, :edit, :udpate, :delete, :destroy]
  
  def index
    if request.xhr?
      render partial: "devise/form"
    end
  end

  def show
  end

  def new
  end

  def create
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
    params.require(:course).permit(:title, :location, :start_date, :end_date, :instructor_id, :student_id, :summary, :description)
  end

  def find_course
    @course = Course.find(params[:id])
  end
end
