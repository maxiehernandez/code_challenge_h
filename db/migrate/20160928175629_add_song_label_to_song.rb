class AddSongLabelToSong < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :song_label, :text, array:true, default: []
  end
end
