json.array! @guests.select{|guest| guest.age < 50 && guest.age>40} do |guest|
  json.partial! 'api/guests/guest', guest: guest
end
