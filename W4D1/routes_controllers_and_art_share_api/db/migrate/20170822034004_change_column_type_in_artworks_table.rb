class ChangeColumnTypeInArtworksTable < ActiveRecord::Migration[5.1]
  def up
    change_column :artworks, :artist_id, :string
  end

  def down
    change_column :artworks, :artist_id, :integer
  end
end
