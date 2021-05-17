class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :title, null: false
      t.boolean :is_private, default: false, null: false
      t.integer :server_id, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end

    add_index :channels, :title, unique: true
    add_index :channels, :server_id
    add_index :channels, :owner_id
  end
end
