json.id email.id
json.body strip_tags(email.body)
json.created_at format_date(email.created_at)
json.student_count email.students.count