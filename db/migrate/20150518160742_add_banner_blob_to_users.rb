class AddBannerBlobToUsers < ActiveRecord::Migration
  def change
    add_column :users, :banner_blob, :string
  end
end
