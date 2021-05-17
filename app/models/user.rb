class User < ApplicationRecord 
  
  validates :email, :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  
  attr_reader :password
  
  after_initialize :ensure_session_token

  # Associations
  has_many :servers_owned,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :Server

  has_many :memberships,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Membership

  has_many :servers, # servers joined
    through: :memberships,
    source: :joinable,
    source_type: 'Server'

  has_many :channels_owned,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :Channel


  # Methods:

  def self.find_by_credentials(username, password) 
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

end