require_relative 'my_stack'

class StackQueue
  def initialize
    @in_stack = MyStack.new
    @out_stack = MyStack.new
  end

  def empty?
    @in_stack.empty? && @out_stack.empty?
  end

  def enqueue(el)
    @in_stack.push(el)
  end

  def dequeue
    if @out_stack.empty?
      queueify
    end

    @out_stack.pop
  end

  private
  def queueify
    until @in_stack.empty?
      @out_stack.push(@in_stack.pop)
    end
  end
end
