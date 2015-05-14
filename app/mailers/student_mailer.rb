class StudentMailer < ApplicationMailer
  default from: "no-reply@skillup.com"

  def welcome_email(student, course)
    @course = course
    @student = student
    mail(to: @student.email, subject: "Thanks for signing up for #{@course.title}")
  end

  def teacher_email(student, course, email_body)
    @course = course
    @student = student
    @body = email_body
    mail(to: @student.email, subject: "#{@course.user.name} has an update about #{@course.title}")
  end

  def teacher_email_all(student, subject, body)
    @student = student
    @body = body
    mail(to: @student.email, subject: subject)
  end

end
