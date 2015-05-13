class Student < ActiveRecord::Base
  belongs_to :course

  validates :first_name, presence: { message: "Please enter your first name" }
  validates :last_name, presence: { message: "Please enter your last name" }
  validates :email, presence: { message: "Please enter your email" }
  before_save :titleize_name

  def name
    "#{self.first_name} #{self.last_name}"
  end

  def titleize_name
    self.first_name = self.first_name.titleize
    self.last_name = self.last_name.titleize
  end

end

