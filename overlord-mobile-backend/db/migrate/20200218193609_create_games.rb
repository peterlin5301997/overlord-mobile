class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :evolution
      t.boolean :completed

      t.timestamps
    end
  end
end
