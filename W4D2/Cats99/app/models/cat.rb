class Cat < ApplicationRecord
  COLORS = [
    'black',
    'white',
    'brown',
    'orange',
    'purple'
  ]

  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :color, inclusion: { in: COLORS }
  validates :sex, inclusion: { in: %W( M F )}


  def age
    days = (Date.today - self.birth_date)
    (days/365.0).floor
  end

end
