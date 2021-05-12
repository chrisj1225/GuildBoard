class Membership < ApplicationRecord
  
  validates :user_id, :joinable_id, :joinable_type, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :joinable,
    polymorphic: true

end