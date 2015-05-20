class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :title
      t.string :location
      t.string :summary
      t.string :description
      t.string :slug

      t.datetime :start_date
      t.datetime :end_date

      t.timestamps null: false
    end
  end
end
