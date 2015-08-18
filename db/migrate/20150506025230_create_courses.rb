class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :title
      t.string :location
      t.string :summary
      t.string :description
      t.string :slug
      t.string :banner_picture_url
      t.integer :latitude
      t.integer :longitude
      t.integer :welcome_email_id

      t.datetime :start_date
      t.datetime :end_date

      t.references :instructor, index: true

      t.timestamps null: false
    end
  end
end
