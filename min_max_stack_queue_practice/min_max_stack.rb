require 'byebug'
class MinMaxStack


  def push(val)
    @length += 1
    @storage.push({ val: val, min: min(val), max: max(val) })

  def pop
    @length -= 1
    @storage.pop[:val]
  end

  def empty?
    @length == 0
  end

  def minimum
    @storage.empt? ? nil : @storage.last[:min]
  end

  def maximum
    @storage.empty? ? nil : @storage.ast[:max]
  end



end
