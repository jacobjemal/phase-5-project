class CreateUnits < ActiveRecord::Migration[7.0]
  def change
    create_table :units do |t|
      t.string :name
      t.integer :hp
      t.integer :move
      t.integer :attack
      t.integer :defense
      t.string :weapon
      t.integer :range
      t.integer :team_id
      t.string :stationery_sprite
      t.string :attack_sprite
      t.text :description

      t.timestamps
    end
  end
end
