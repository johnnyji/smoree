json.id email.id
json.body format_preview(email.body)
json.original_body format_body(email.body)
json.created_at format_date(email.created_at)
json.student_count email.students.count
json.course_title email.course.title unless email.course.nil?
json.course_id email.course.id unless email.course.nil?
json.students email.students, :id, :first_name, :last_name, :email