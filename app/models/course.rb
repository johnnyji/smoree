class Course < ActiveRecord::Base
  belongs_to :user
  has_many :students, dependent: :destroy
  has_many :emails
  has_many :views, dependent: :destroy
  
  validates :slug,
              uniqueness: { message: "Sorry! This subdomain is taken" },
              presence: { message: "The course subdomain cannot be blank" }
  validates :title,  
              presence: { message: "The course title is blank" }, 
              uniqueness: { message: "This title has already been taken" }
  validates :start_date, presence: { message: "Select a start date" }
  validates :end_date, presence: { message: "Select a end date" }
  validates :summary, presence: { message: "The course summary is blank" }
  validates :description, presence: { message: "The course description is blank" }
  validates :latitude, presence: { message: "Select a location for the course" }

  def signups_per_day(num_of_days)
    self.students.group("DATE(created_at)").limit(num_of_days).count
  end

  def date_created
    self.created_at.strftime("%b %d %Y")
  end

  def ended
    self.end_date < Date.today
  end

  def in_progress
    self.start_date > Date.today
  end

end
