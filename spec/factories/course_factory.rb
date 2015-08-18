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

FactoryGirl.define do
  factory :course do
    title { Faker::Name.title }
    summary { Faker::Lorem.sentence }
    description { Faker::Lorem.paragraph(2) }
    slug { Faker::Internet.slug }
    start_date { Faker::Time.between(DateTime.now, DateTime.now + 10) }
    end_date { Faker::Time.between(DateTime.now + 10, DateTime.now + 30) }
    latitude { Faker::Address.latitude }
    longitude { Faker::Address.longitude }

    trait :with_instructor do
      after(:create) do |course|
        course.instructor = create(:instructor, course: course)
      end
    end

    trait :with_students do
      after(:create) do |course|
        course.students = create_list(:student, rand(2..7), course: course)
      end  
    end

    association :instructor
  end
end
