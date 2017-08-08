require_relative "tile"

class Board

  CONSTANTS = { upper_left:[-1,-1], upper:[-1, 0], upper_right:[-1,1] }

  def self.empty_grid
    Array.new(9)  { Array.new(9) { Tile.new } }
  end

  def initialize(grid = self.empty_grid)
    @grid = grid
  end

  def populate_bombs
  end



  def assign_value(pos)
    x, y = pos
    counter = 0
    # # @grid.each_with_index do |row, i|
    # #   row.each_with_index do |cell, j|
    # #
    # case
    # when @grid[x-1][y-1].bomb



    end
  end

  def [](pos)
    x, y = pos
    @grid[x][y]
  end

  def []=(pos, val)
    x, y = pos
    @grid[x][y] = val
  end

end
