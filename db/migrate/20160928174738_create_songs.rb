class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :song_name
      t.integer :song_order
      t.string :song_duration
      t.references :album, foreign_key: true

      t.timestamps
    end
  end
end
