# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
dillon = User.create!(email: "sample@gmail.com")
paolo = User.create!(email: "paolo@paolo.com")
brian = User.create!(email: "brian@brian.brian")
dallas = User.create!(email: "dallas@the.legend")

ShortenedUrl.destroy_all
sample = ShortenedUrl.shorten_url(5, "www.google.com")
s1 = ShortenedUrl.shorten_url(6, "www.yahoo.com")
s2 = ShortenedUrl.shorten_url(5, "www.askjeeves.com")
s3 = ShortenedUrl.shorten_url(5, "www.bing.com")

Visit.destroy_all
sample1 = Visit.create!(user_id: 5, short_url_id: 8)
