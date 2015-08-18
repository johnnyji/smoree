require 'rails_helper'

describe 'POST /instructor' do
  
  context 'when the correct params are passed' do
    before do
      @first_name = Faker::Name.first_name
      post '/instructor',
        instructor: {
          bio: Faker::Lorem.paragraph
        },
        account: {
          first_name: @first_name,
          last_name: Faker::Name.last_name,
          email: Faker::Internet.email,
          password: '123456',
          password_confirmation: '123456'
        }
    end
    it 'returns 201' do
      expect_response_code(201)
    end
    it 'returns the newly created instructors id' do
      expect(parsed_body).to include('instructor')
      expect(parsed_body['instructor']).to include('id')
    end
  end

  context 'when the incorrect params are passed' do
    before do
      post '/instructor',
        instructor: {
          bio: Faker::Lorem.paragraph
        },
        account: {
          last_name: Faker::Name.last_name,
          email: Faker::Internet.email,
          password: '123456',
          password_confirmation: '123456'
        }
    end
    it 'returns 422' do
      expect_response_code(422)
    end
    it 'returns an error message' do
      expect(parsed_body).to include('message')
    end
  end

end