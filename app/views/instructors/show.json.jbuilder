json.instructor do
  json.extract! @instructor, :id, :bio
  json.courses @instructor.courses do |course|
    json.extract! course, :id, :title, :location, :summary, :description
  end
end