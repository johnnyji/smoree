class AddBannerBlobToUsers < ActiveRecord::Migration
  def change
    add_column :users, :banner_blog, :string
  end
end
