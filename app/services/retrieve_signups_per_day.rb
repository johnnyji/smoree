class RetrieveSignupsPerDay
  extend Service

  def initialize(course, range_of_days)
    @course = course
    @range_of_days = range_of_days
  end

  def call
    @range_of_days.map do |day|
      @course.students.where(created_at: (day.beginning_of_day..day.end_of_day)).count
    end
  end
end