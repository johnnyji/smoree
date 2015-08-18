FactoryGirl.define do
  factory :instructor do
    bio { Faker::Lorem.paragraph }

    trait :with_account do
      after(:create) do |instructor|
        create(:account, accountable: instructor)
      end
    end

    trait :with_courses do
      after(:create) do |instructor|
        create_list(:course, rand(1..7), instructor: instructor)
      end
    end

  end
end