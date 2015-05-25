class RetrieveSignupsPerDay
  extend Service

  def initialize(course, range_of_days)
    @course = course
    @range_of_days = range_of_days
  end

  def call
    #returns an array of arrays, where each array item contains the date and the signups ie. [["May 1st 2015", 11], ["May 2nd 2015, 8"]]
    @range_of_days.map do |day|
      [day.strftime("%b %d %Y"), @course.students.where(created_at: (day.beginning_of_day..day.end_of_day)).count]
    end
  end
end