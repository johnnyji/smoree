class CreateEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.string :sender_email
      t.string :recepient_emails, array: true
      t.string :subject
      t.text :body
      t.references :course, index: true

      t.timestamps null: false
    end
    add_index :emails, :sender_email
  end
end
