# == Schema Information
#
# Table name: students
#
#  id            :integer          not null, primary key
#  first_name    :string
#  last_name     :string
#  email         :string
#  course_id     :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  intro_message :string
#

class Student < ActiveRecord::Base
  has_one :account, as: :accountable, dependent: :destroy
  has_many :course_registrations
  has_many :courses, through: :course_registrations

end

