class Email < ActiveRecord::Base
  belongs_to :user
  belongs_to :course
  has_many :email_students
  has_many :students, through: :email_students

  def save_and_send(student_ids)
    students = Student.where(id: student_ids)
    students.each do |student|
      self.students << student
      StudentMailer.delay.email(student, student.course, self.body)
    end
    self.save
  end

end
