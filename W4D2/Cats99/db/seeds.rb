# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.destroy_all

c1 = Cat.create!(birth_date: "2015/01/07", color: "black", name: "Dallas", sex: "M", description: "A lovely cat" )
c2 = Cat.create!(birth_date: "2014/01/07", color: "white", name: "Kelly", sex: "M", description: "A stubborn cat" )
