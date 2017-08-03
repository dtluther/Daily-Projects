class Board

  def self.empty_grid
    Array.new(9)  { Array.new(9) { :X } }
  end

  def initialize(grid = self.empty_grid)
    @grid = grid
  end

  def populate_bombs
  end

end
