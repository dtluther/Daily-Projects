require_relative 'my_stack'

class MaxStack
  def initialize
    @store = MyStack.new
  end

  def push(el)
    @store.push({ val: el, max: maximum(el) })
  end

  def pop
    @store.pop
  end

  def empty?
    @store.empty?
  end

  def peek
    @store.peek[:value]
  end

  def max
    @store.peek[:max]
  end

  private

  def maximum(el)
    return el if empty?
    new_max = el > max ? el : max
  end
end
