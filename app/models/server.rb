class Server < ApplicationRecord

  validates :title, presence: true, uniqueness: true;
  
  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :memberships, 
    as: :joinable,
    dependent: :destroy

  has_many :members,
    through: :memberships,
    source: :user

  has_many :channels,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :Channel,
    dependent: :destroy

end