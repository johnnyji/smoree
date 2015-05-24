class RetrieveViewsPerDay
  extend Service

  def initialize(model, range_of_days)
    @model = model
    @range_of_days = range_of_days
  end

  def call
    @range_of_days.map do |day|
      @model.views.where(created_at: (day.beginning_of_day..day.end_of_day)).count
    end
  end
end