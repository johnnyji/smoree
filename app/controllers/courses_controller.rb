class CoursesController < ApplicationController
  before_action :find_course, only: [:show, :new, :create, :edit, :udpate, :delete, :destroy]
  
  def index
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

  private

  def course_params
    params.require(:course).permit(:title, :location, :start_date, :end_date, :instructor_id, :student_id, :summary, :description)
  end

  def find_course
    @course = Course.find(params[:id])
  end
end
