require_relative 'my_stack'

class MinMaxStack
  def initialize
    @store = MyStack.new
  end

  def push(el)
    @store.push({
      val: el,
      min: minimum(el),
      max: maximum(el)
    })
  end

  def pop
    @store.pop
  end

  def empty?
    @store.empty?
  end

  def peek
    @store.peek[:val]
  end

  def min
    @store.peek[:min]
  end

  def max
    @store.peek[:max] unless empty?
  end

  private

  def minimum(el)
    return el if empty?
    new_min = el < min ? el : min
  end

  def maximum(el)
    return el if empty?
    new_max = el > max ? el : max
  end
end
