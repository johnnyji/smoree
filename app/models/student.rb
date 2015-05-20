class Student < ActiveRecord::Base
  belongs_to :course

  has_many :email_students
  has_many :emails, through: :email_students

  validates :first_name, presence: { message: "Please enter your first name" }
  validates :last_name, presence: { message: "Please enter your last name" }
  validates :email, 
            uniqueness: { scope: :course, message: "This email is already registered for this course" },
            presence: { message: "Please enter your email" }
  before_save :titleize_name

  def name
    "#{self.first_name} #{self.last_name}"
  end

  def titleize_name
    self.first_name = self.first_name.titleize
    self.last_name = self.last_name.titleize
  end

end

