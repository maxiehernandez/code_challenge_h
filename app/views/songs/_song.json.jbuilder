json.extract! song, :id, :song_name, :song_order, :song_duration, :album_id, :created_at, :updated_at
json.url song_url(song, format: :json)