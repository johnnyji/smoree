class CreateEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.text :body
      t.references :user, index: true

      t.timestamps null: false
    end
    add_foreign_key :emails, :users
  end
end
