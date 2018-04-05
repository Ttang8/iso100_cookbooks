json.extract! photo, :id, :user_id, :title, :description, :image_url, :album_id
json.extract! photo.user, :username

json.set! :comments do
  json.array! photo.comments do |comment|
    json.partial! 'api/comments/comment', comment: comment
  end
end

json.set! :tags do
  json.array! photo.tags do |tag|
    json.partial! 'api/tags/tag', tag: tag
  end
end
