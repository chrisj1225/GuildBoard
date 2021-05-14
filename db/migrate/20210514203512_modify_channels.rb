class ModifyChannels < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :title, :string, null: false
    add_column :channels, :is_private, :boolean, default: false, null: false
    add_column :channels, :server_id, :integer, null: false
    add_column :channels, :owner_id, :integer, null: false
    add_column :channels, :created_at, :datetime, null: false
    add_column :channels, :updated_at, :datetime, null: false

    add_index :channels, :title, unique: true
    add_index :channels, :server_id
    add_index :channels, :owner_id
    
  end
end
