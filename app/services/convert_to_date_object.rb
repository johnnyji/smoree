class ConvertToDateObject
  extend Service

  def initialize(days)
    @days = days
  end

  def call
    @days.map { |day| Date.parse(day) }
  end

end