class MaxMinStackQueue

  def initialize
    @in_stack = MinMaxStack.new
    @out_stack = MinMaxStack.new
  end

  def dequeue
    swap if @out_stack.empty?
  end

  def minimum
    if @in_stack.minimum && @out_stack.minimum
      @in_stack.minimum < @out_stack.minimum ? @in_stack.minimum : @outstack.minimum
    else
      @in_stack.minimum || @out_stack.minimum
    end

  end

  def maximum

    def minimum
      if @in_stack.maximum && @out_stack.maximum
        @in_stack.maximum > @out_stack.maximum ? @in_stack.maximum : @outstack.maximum
      else
        @in_stack.maximum || @out_stack.maximum
      end
    end
  end
end
