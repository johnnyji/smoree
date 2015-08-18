FactoryGirl.define do
  factory :account do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    email { Faker::Internet.email }
    password { '123456' }
    password_confirmation { '123456' }
    profile_picture_url { Faker::Avatar.image }
    banner_picture_url { Faker::Avatar.image }

    association :accountable
  end
end