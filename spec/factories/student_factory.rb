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

FactoryGirl.define do
  factory :student do

    association :course
    association :accountable
  end
end
