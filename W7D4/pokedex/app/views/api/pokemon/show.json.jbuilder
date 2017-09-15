json.pokemon do
  # json.id @pokemon.id
  # json.name @pokemon.name
  # json.attack @pokemon.attack
  # json.defense @pokemon.defense
  # json.poke_type @pokemon.poke_type
  # json.moves @pokemon.moves
  json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :moves
  json.image_url asset_path(@pokemon.image_url)
end

json.items @pokemon.items do |item|
  # json.id item.id
  # json.name item.name
  # json.pokemon_id item.pokemon_id
  # json.price item.price
  # json.happiness item.happiness
  json.extract! item, :id, :name, :pokemon_id, :price, :happiness
  json.image_url asset_path(item.image_url)
end
