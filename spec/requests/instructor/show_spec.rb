require 'rails_helper'

describe 'GET /instructor' do
  let(:instructor) { create(:instructor, :with_courses) }

  context 'when id is passed' do
    before do
      get '/instructor',
        id: instructor.id
    end
    it 'returns 200' do
      expect_response_code(200)
    end
    it 'returns the instructor along with their associations' do
      expect(parsed_body).to include('instructor')
      expect(parsed_body['instructor']['id']).to eq(instructor.id)
      expect(parsed_body['instructor']['courses'].length).to eq(instructor.courses.length)
    end
  end

  context 'when no id is passed' do
    before do
      get '/instructor'
    end
    it 'returns 404' do
      expect_response_code(404)
    end
    it 'returns an error message' do
      expect(parsed_body).to include('message')
      expect(parsed_body['message']).to include('No instructor')
    end
  end

end