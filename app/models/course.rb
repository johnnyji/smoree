# == Schema Information
#
# Table name: courses
#
#  id            :integer          not null, primary key
#  title         :string
#  location      :string
#  summary       :string
#  description   :string
#  slug          :string
#  start_date    :datetime
#  end_date      :datetime
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  latitude      :float
#  longitude     :float
#  user_id       :integer
#  image_url     :string
#  welcome_email :string
#

class Course < ActiveRecord::Base
  belongs_to :instructor
  has_one :welcome_email, class_name: 'Email', foreign_key: :welcome_email_id
  has_many :course_registrations
  has_many :students, through: :course_registrations
  
  validate  :slug_is_not_www
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
  validates :longitude, presence: { message: "Select a location for the course" }

  def slug_is_not_www
    errors.add(:slug, "www is an invalid subdomain") if self.slug == "www"
  end

end
