class AddImageBlogToUsers < ActiveRecord::Migration
  def change
    add_column :users, :image_blob, :string, default: "avatar.png"
  end
end
