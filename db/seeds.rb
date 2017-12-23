# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

[
  'How Notifications Work',
  'Intro to the Clientside',
  'How do I reinvite someone or check status?',
  '@Mentions',
  'How do I turn notifications on/off?',
  'Clientside Message Board',
  'Reports',
  'Inviting People to a Project',
  'Adding Clients',
  'Managing People',
  'Tracking Bugs',
].each do |title|
  Article.create(title: title)
end
