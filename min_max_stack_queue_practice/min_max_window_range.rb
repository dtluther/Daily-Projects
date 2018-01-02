arr = [1, 2, 5, 4, 3, 0]

#stacks can push and pop in O(1) times
# {val: num, min:, max:}

# |         |
# |         |
# |         |
# |         |
# |         |
# |_________|

class Stack
  def initialize
    @storage = []
  end

  def push(val)
    @storage.push(val)
    @storage.pop
  end

  def pop
    @storage.pop
  end

  def empty?
    @storage.empty?
  end
end


#max_win_range
require_relative './min_max_stack_queue'

def max_win_range(range, win)
  
