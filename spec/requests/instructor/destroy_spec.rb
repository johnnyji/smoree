require 'rails_helper'

describe 'DELETE /instructor' do
  let(:instructor) { create(:instructor, :with_account) }

  before do
    stub_current_user(instructor)
  end

  before(:each) do
    delete '/instructor'
  end

  it 'returns 204' do
    expect_response_code(204)
  end

  it ''
end