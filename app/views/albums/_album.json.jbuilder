json.extract! album, :id, :name, :artist_name, :cover_photo_url, :created_at, :updated_at
json.url album_url(album, format: :json)