class Student < ActiveRecord::Base
  belongs_to :course

  validates :first_name, presence: { message: "Please enter your first name" }
  validates :last_name, presence: { message: "Please enter your last name" }
  validates :email, presence: { message: "Please enter your email" }
end
