class MaxIntSet
  def initialize(max_int)
    @max_int = max_int
    @store = Array.new(max_int) { false }
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
end

class IntSet
  def initialize
    @store = Array.new(3) { [] }
    @length = @store.length
  end

  def insert(int)
    bucket_index = int % @length
    @store[bucket_index] << int
  end



  def remove(int)
    if include?(int)
      self[int].delete(int)
    end
  end

  def include?(int)
    self[int].each do |num|
      return true if num == int
    end
    raise "not included"
  end

  private

  def [](int)
    bucket_index = int % @length
    @store[bucket_index]
  end
end

class ResizingIntSet
  def initialize
    @store = Array.new(2) { [] }
    @size = @store.size
    @count = 0
  end
  #
  # def double_buckets
  #   @store += Array.new(@size) { [] }
  #   @size += @size
  #   reallocate(@size)
  # end

  def resize(num_buckets)
    prev_store = @store
    num_buckets = @size
    @store = Array.new(2 * num_buckets) { [] }
    @size *= 2

    prev_store.each do |bucket|
      bucket.each do |int|
        bucket_index = int % @size
        @store[bucket_index] << int
      end
    end
  end

  def insert(int)
    unless include?(int)
      resize(@size) if @count == @size
      @store[int % @size] << int
      @count += 1
    end
  end

  def include?(int)
    bucket_index = int % @size
    @store[bucket_index].include?(int)
  end

  def remove(int)
    if include?(int)
      bucket_index = int % @size
      @store[bucket_index].delete(int)
    end
  end

end
