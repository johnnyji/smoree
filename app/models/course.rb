class Course < ActiveRecord::Base
  belongs_to :user
  has_many :students, dependent: :destroy
  has_many :emails
  has_many :views, dependent: :destroy
  
  validates :slug,
              uniqueness: { message: "Sorry! This subdomain is taken" },
              presence: { message: "The course subdomain cannot be blank" }
  validate  :slug_is_not_www
  validates :title,  
              presence: { message: "The course title is blank" }, 
              uniqueness: { message: "This title has already been taken" }
  validates :start_date, presence: { message: "Select a start date" }
  validates :end_date, presence: { message: "Select a end date" }
  validates :summary, presence: { message: "The course summary is blank" }
  validates :description, presence: { message: "The course description is blank" }
  validates :latitude, presence: { message: "Select a location for the course" }
  validates :

  def ended
    self.end_date < Date.today
  end

  def in_progress
    self.start_date > Date.today
  end

  def slug_is_not_www
    errors.add(:slug, "www is an invalid subdomain") if self.slug == "www"
  end

end
