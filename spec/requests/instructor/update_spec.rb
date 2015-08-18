require 'rails_helper'

describe 'PUT /instructor' do
  let(:instructor) { create(:instructor, :with_account) }

  context 'when the current user is present' do
    before do
      stub_current_user(instructor)
    end
    context 'the correct params are passed' do
      before(:each) do
        put '/instructor',
          id: instructor.id,
          instructor: instructor.as_json,
          account: instructor.account.as_json.merge!({ password: '1234567', password_confirmation: '1234567' })
      end
      it 'returns 201' do
        expect_response_code(201)
      end
    end
    context 'the incorrect params are passed' do
      before(:each) do
        put '/instructor',
          id: instructor.id,
          instructor: instructor.as_json,
          account: instructor.account.as_json.merge!({ password: '123', password_confirmation: '1224' })
      end
      it 'returns 422' do
        expect_response_code(422)
      end
      it 'returns the correct error message when the password doesnt match' do
        expect(parsed_body).to include('message')
        expect(parsed_body['message']).to include('match')
      end
    end
  end

  context 'when the current user is not present' do
    xit 'returns 403' do
    end
  end

end