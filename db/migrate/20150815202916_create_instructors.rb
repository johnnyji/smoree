class CreateInstructors < ActiveRecord::Migration
  def change
    create_table :instructors do |t|
      t.text :bio
      t.integer :subscription_status
      
      t.timestamps null: false
    end
  end
end
