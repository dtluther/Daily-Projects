require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    if include?(key.hash) == false
      resize! if count + 1 > num_buckets
      self[key.hash] << key
      @count += 1
    end
  end

  def include?(key)
    if self[key.hash].include?(key)
      true
    else
      false
    end
  end

  def remove(key)
    if include?(key.hash) == false
      self[key.hash].delete(key)
    end
  end

  private

  def [](num)
    bucket_index = num.hash % num_buckets
    @store[bucket_index]
  end

  def num_buckets
    @store.length
  end

  def resize!
    prev_store = @store
    @store = Array.new(2 * num_buckets) { [] }
    prev_store.each do | bucket |
      bucket.each do | key |
        self[key.hash] << key 
      end
    end
  end
end
