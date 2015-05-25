class RetrieveViewsPerDay
  extend Service

  def initialize(model, range_of_days)
    @model = model
    @range_of_days = range_of_days
  end

  def call
    #returns an array of arrays, where each array item contains the date and the views ie. [["May 1st 2015", 11], ["May 2nd 2015, 8"]]
    @range_of_days.map do |day|
      [day.strftime("%b %d %Y"), @model.views.where(created_at: (day.beginning_of_day..day.end_of_day)).count]
    end
  end
end