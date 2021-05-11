class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end

    add_index :servers, :title, unique: true
    add_index :servers, :owner_id
  end
end
