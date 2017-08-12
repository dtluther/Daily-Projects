class Node
  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
  end
end

class LinkedList
  def initialize
    @head = Node.new
    @tail = Node.new
    @head.next = @tail
    @tail.prev = @head
    # @count = 0

  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    @head.next == @tail
  end

  def get(key)

  end

  def include?(key)
  end

  def append(key, val)
    new_node = Node.new(key, val)
    last_prev = @tail.prev
    @tail.prev, new_node.next = new_node, @tail
    new_node.prev, last_prev.next = last_prev, new_node
  end

  def update(key, val)

    self.each do |node|
      if node.key == key
        node.value = val
      end
    end

  end

  def remove(key)
  end

  def each
    current_node = @head
    until current_node == @tail
      yield current_node
      current_node = current_node.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  # def to_s
  #   inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  # end
end
