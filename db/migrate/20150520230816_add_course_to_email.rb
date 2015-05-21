class AddCourseToEmail < ActiveRecord::Migration
  def change
    add_reference :emails, :course, index: true
    add_foreign_key :emails, :courses
  end
end
