class Channel < ApplicationRecord
  validates :title, :server_id, :owner_id, presence: true

  belongs_to :server,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :Server

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

end