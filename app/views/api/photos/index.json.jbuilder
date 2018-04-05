@photos.each do |photo|
  json.set! photo.id do
    json.partial! 'api/photos/photo', photo: photo
    json.image_url asset_path(photo.image_url)
  end
end
