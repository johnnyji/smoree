class CreateViews < ActiveRecord::Migration
  def change
    create_table :views do |t|
      t.references :course, index: true

      t.timestamps null: false
    end
    add_foreign_key :views, :courses
  end
end
