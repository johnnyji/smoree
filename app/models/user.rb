class User < ActiveRecord::Base
  authenticates_with_sorcery!

  has_many :courses

  validates :first_name, :last_name, presence: { message: "Your name can't be blank!"} 
  validates :email, presence: { message: "Your email can't be blank!" }

  def name
    "#{self.first_name} #{self.last_name}"
  end
  
end
