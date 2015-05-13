class AddWelcomeEmailToCourse < ActiveRecord::Migration
  def change
    add_column :courses, :welcome_email, :string
  end
end
