class Course < ActiveRecord::Base
  belongs_to :user
  has_many :students

  validates :title, 
            presence: { message: "Your course needs a title!" }, 
            uniqueness: { message: "This title has already been taken" }
  validates :start_date, presence: { message: "You need a start date" }
  validates :end_date, presence: { message: "You need an end date" }
  validates :summary, presence: { message: "Tell people about your course!" }
  validates :description, presence: { message: "Describe what your course is about" }

  scope :search, lambda { |terms| where(["lower(title) LIKE ? OR lower(instructor.name) LIKE ?", "%#{terms.downcase}%", "%#{terms.downcase}%"]) }
end
