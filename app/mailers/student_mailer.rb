class StudentMailer < ApplicationMailer
  default from: "no-reply@skillup.com"

  def welcome_email(student, course)
    @course = course
    @student = student
    mail(to: @student.email, subject: "Thanks for signing up for #{@course.title}")
  end

  def teacher_email(student, course, subject, email_body)
    @course = course
    @student = student
    @body = email_body
    mail(to: @student.email, subject: subject)
  end

end
