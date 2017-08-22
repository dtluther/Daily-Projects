# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all

user1 = User.create!(username: "DallasTheLegend")
user2 = User.create!(username: "KellyTheCorgiKing")

artwork1 = Artwork.create!(title: "SolarEclipse", image_url: "www.google.com", artist_id: user1.id )
artwork2 = Artwork.create!(title: "LunarLanding", image_url: "www.google1.com", artist_id: user2.id )

as1 = ArtworkShare.create!(artwork_id: artwork1.id, viewer_id: user1.id)
as2 = ArtworkShare.create!(artwork_id: artwork2.id, viewer_id: user2.id)
