class Course < ActiveRecord::Base
  belongs_to :user
  has_many :students

  validates :title, 
            presence: { message: "The course title is blank" }, 
            uniqueness: { message: "This title has already been taken" }
  validates :start_date, presence: { message: "Select a start date" }
  validates :end_date, presence: { message: "Select a end date" }
  validates :summary, presence: { message: "The course summary is blank" }
  validates :description, presence: { message: "The course description is blank" }
  validates :latitude, presence: { message: "Select a location for the course" } 

  scope :search, 
        lambda { |terms| where(["lower(title) LIKE ? OR lower(user) LIKE ?", "%#{terms.downcase}%", "%#{terms.downcase}%"]) }

  def ended
    self.end_date < Date.today
  end

  def in_progress
    self.start_date > Date.today
  end

end
