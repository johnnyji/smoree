class Course < ActiveRecord::Base
  belongs_to :instructor
  has_many :students

  validates :title, presence: {message: "Your course needs a title!"}, uniqueness: {message: "This title has already been taken"}
  validates :start_date, :end_date, presence: {message: "This date can't be blank!"}
  validates :summary, presence: {message: "Tell people about your course!"}
  validates :description, presence: {message: "Describe what your course is about"}, length: {minimum: 3, message: "You're description is way too short!"}

  scope :search, lambda { |terms| where(["lower(title) LIKE ? OR lower(instructor.name) LIKE ?", "%#{terms.downcase}%", "%#{terms.downcase}%"]) }
end
