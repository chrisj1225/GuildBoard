# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Server.delete_all
Membership.delete_all

chris = User.create!(
  email: 'chris@example.com', 
  username: 'chris', 
  password: 'password'
)

general_server = Server.create!(
  title: 'General',
  owner_id: chris.id
)

gen_genChan = Channel.create!(
  title: 'general',
  server_id: general_server.id,
  owner_id: chris.id
)

# gen_rulesChan = Channel.create!(
#   title: 'welcome-and-rules',
#   server_id: general_server.id,
#   owner_id: chris.id
# )

aA_server = Server.create!(
  title: 'App Academy',
  owner_id: chris.id
)

aA_genChan = Channel.create!(
  title: 'general',
  server_id: aA_server.id,
  owner_id: chris.id
)

chris_gen = Membership.create!(
  user_id: chris.id,
  joinable_id: general_server.id,
  joinable_type: 'Server'
)

demo_user = User.create!(
  email: 'demo@example.com', 
  username: 'demouser', 
  password: 'password'
)

demo_gen = Membership.create!(
  user_id: demo_user.id,
  joinable_id: general_server.id,
  joinable_type: 'Server'
)

test_user = User.create!(
  email: 'test@example.com', 
  username: 'testuser', 
  password: 'password')

test_gen = Membership.create!(
  user_id: test_user.id,
  joinable_id: general_server.id,
  joinable_type: 'Server'
)