class Tile

  def initialize(value)
    @value = value
    @bomb = false
    @face_up = false
  end

  def maybe_bomb
    if rand(10)  == 1
      @bomb = true
    end
  end

end
