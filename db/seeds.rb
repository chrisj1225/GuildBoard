# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Server.delete_all

chris = User.create!(
  email: 'chris@example.com', 
  username: 'chris', 
  password: 'password'
)

test_user = User.create!(
  email: 'test@example.com', 
  username: 'testuser', 
  password: 'password')

demo = User.create!(
  email: 'demo@example.com', 
  username: 'demouser', 
  password: 'password'
)

general_server = Server.new(
  title: 'General',
  description: 'General Server to discuss anything!'
)
general_server.owner_id = chris.id
general_server.save!

aA_server = Server.new(
  title: 'App Academy',
  description: 'App Academy Server'
)
general_server.owner_id = chris.id
general_server.save!