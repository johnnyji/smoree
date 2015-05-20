class CreateEmailStudents < ActiveRecord::Migration
  def change
    create_table :email_students do |t|
      t.references :email, index: true
      t.references :student, index: true

      t.timestamps null: false
    end
    add_foreign_key :email_students, :emails
    add_foreign_key :email_students, :students
  end
end
