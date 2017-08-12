class MaxIntSet
  def initialize(max)
  end

  def initialize(max)
    @max = max
    @store = Array.new(max) { false }
  end

  def insert(int)
    include?(int)
    @store[int] = true
  end

  def remove(int)
    include?(int)
    @store[int] = false
  end

  def include?(int)
    raise "out of bounds" if int > @max_int || int < 0
    @store[int]
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
  end

  def remove(num)
  end

  def include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
  end

  def remove(num)
  end

  def include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
  end
end
