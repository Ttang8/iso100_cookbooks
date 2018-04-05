json.extract! comment, :id, :user_id, :body, :photo_id
json.author comment.user.username
json.time comment.time
