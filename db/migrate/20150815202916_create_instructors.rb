class CreateInstructors < ActiveRecord::Migration
  def change
    create_table :instructors do |t|
      t.text :bio
      
      t.timestamps null: false
    end
  end
end
