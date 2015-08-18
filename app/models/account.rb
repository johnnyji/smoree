class Account < ActiveRecord::Base
  has_secure_password

  belongs_to :accountable, polymorphic: true

  validates :first_name, 
              presence: { message: 'Please enter your first name' }
  validates :last_name, 
              presence: { message: 'Please enter your last name' }
  validates :email, 
              uniqueness: { message: 'This email is taken' },
              presence: { message: 'Please enter your email' }
  validates :password, 
              presence: { message: 'Password is required' },
              length: { minimum: 6, message: 'Password must be > 6 chars' }
  validates :password_confirmation, 
              presence: { message: 'Password confirmation is required' },
              length: { minimum: 6, message: 'Password confirmation must be > 6 chars' }
              
  before_save :titleize_name

  private

  def titleize_name
    self.first_name = self.first_name.titleize
    self.last_name = self.last_name.titleize
  end

end
