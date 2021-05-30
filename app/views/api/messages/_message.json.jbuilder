json.extract! message, :id, :body, :author_id, :messageable_id, :messageable_type, :created_at

author = message.author

json.set! :author_username, author.username
