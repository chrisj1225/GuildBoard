class RemoveChannelTitleUniqueIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :channels, name: "index_channels_on_title"
  end
end
