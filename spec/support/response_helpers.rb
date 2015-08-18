module ResponseHelpers

  def parsed_body
    JSON.parse(response.body)
  end

  def expect_response_code(code)
    expect(response.status).to eq(code)
  end

end

RSpec.configure do |c|
  c.include ResponseHelpers
end