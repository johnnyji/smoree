class User < ActiveRecord::Base
  has_secure_password
  has_many :emails, dependent: :destroy
  has_many :views, through: :courses, dependent: :destroy
  has_many :courses, dependent: :destroy
  has_many :students, -> { uniq }, through: :courses, dependent: :destroy

  validates :first_name, :last_name, presence: { message: "Your name can't be blank!"} 
  validates :email, 
            presence: { message: "Your email can't be blank!" }, 
            uniqueness: { message: "That username is already taken!" }
  before_save :titleize_name

  def name
    "#{self.first_name} #{self.last_name}"
  end

  def has_profile_picture?
    self.image_blob != nil
  end

  private

  def titleize_name
    self.first_name = self.first_name.titleize
    self.last_name = self.last_name.titleize
  end

end
