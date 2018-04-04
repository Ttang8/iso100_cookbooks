json.extract! album, :id, :user_id, :title, :description

json.set! :photos do
  json.array! album.photos do |photo|
    json.partial! 'api/photos/photo', photo: photo
  end
end
