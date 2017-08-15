class MyStack
  def initialize
    @store = []
  end

  def pop
    @store.pop
  end

  def push(el)
    @store << el
    el
  end

  def peek
    @store.last
  end

  def size
    @store.count
  end

  def empty?
    @store.empty?
  end
end
