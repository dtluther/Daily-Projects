class MyQueue

  def initialize
    @store = []
  end

  def enqueue(el)
    @store << el
    el
  end

  def dequeue
    @store.shift
  end

  def size
    @store.count
  end

  def empty?
    @store.empty?
  end

  def peek
    @store.last
  end
end
