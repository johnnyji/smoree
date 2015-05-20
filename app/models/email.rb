class Email < ActiveRecord::Base
  belongs_to :user
  has_many :email_students
  has_many :students, through: :email_students

  def create_and_send(student_ids)
    students = Student.where(id: student_ids)
    students.each do |student|
      self.students << student
      StudentMailer.email(student, student.course, self.body).deliver
    end
    self.save
  end

end
