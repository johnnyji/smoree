class AddBannerPicUrlToUsers < ActiveRecord::Migration
  def change
    add_column :users, :banner_pic_url, :string
  end
end
