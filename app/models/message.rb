class Message < ApplicationRecord
  
  validates :body, :author_id, :messageable_id, :messageable_type, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :messageable,
    polymorphic: true

end