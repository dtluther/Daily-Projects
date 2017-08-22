# == Schema Information
#
# Table name: artworks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  image_url  :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artwork < ApplicationRecord
  validates :title, :image_url, :artist_id, presence: true
  validates :image_url, uniqueness: true
  validates :artist_id, uniqueness: { scope: :title,
    message: "Artist shouldn't have two artworks with the same name." }


  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :User

  has_many :artworks,
    primary_key: :id,
    foreign_key: :artwork_id,
    class_name: :ArtworkShare

  has_many :shared_viewers,
    through: :artworks,
    source: :viewer

end
