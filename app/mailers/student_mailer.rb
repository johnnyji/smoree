class StudentMailer < ApplicationMailer
  default from: "noreply@smoree.com"
  include Roadie::Rails::Automatic

  def welcome_email(student, course)
    @course = course
    @student = student
    mail(to: @student.email, subject: "Thanks for signing up for #{@course.title}")
  end

  def email(student, course, email_body)
    @course = course
    @student = student
    @body = email_body
    mail(to: @student.email, subject: "#{@course.user.name} has sent you a message!")
  end

end
