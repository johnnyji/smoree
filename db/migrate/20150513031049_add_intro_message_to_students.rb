class AddIntroMessageToStudents < ActiveRecord::Migration
  def change
    add_column :students, :intro_message, :string
  end
end
