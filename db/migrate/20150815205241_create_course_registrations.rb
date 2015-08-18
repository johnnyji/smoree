class CreateCourseRegistrations < ActiveRecord::Migration
  def change
    create_table :course_registrations do |t|
      t.references :student, index: true
      t.references :course, index: true

      t.timestamps null: false
    end
    add_foreign_key :course_registrations, :students
    add_foreign_key :course_registrations, :courses
  end
end
