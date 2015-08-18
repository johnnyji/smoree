class CreateAccounts < ActiveRecord::Migration
  def change
    create_table :accounts do |t|
      t.string :email
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :profile_picture_url
      t.string :banner_picture_url
      t.references :accountable, polymorphic: true

      t.timestamps null: false
    end
  end
end
