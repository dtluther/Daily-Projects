# class Fixnum
#   # Fixnum#hash already implemented for you
# end
#
# class Array
#   def hash
#     sum = 0
#     self.each_with_index do |num, i|
#       to_add = num.hash * i.hash
#       sum += to_add
#     end
#     sum
#   end
# end
#
# class String
#   def hash
#     sum = 0
#     self.chars.each_with_index do |char, i|
#       to_add = char.ord.hash * i.hash
#       sum += to_add
#     end
#     sum
#   end
#
# end
#
# class Hash
#   # This returns 0 because rspec will break if it returns nil
#   # Make sure to implement an actual Hash#hash method
#   def hash
#     sum = 0
#     self.each do |k, v|
#       sum += (k.hash * v.hash)
#     end
#     sum
#
#   end
# end

class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    each_with_index.inject(0) do |intermediate_hash, (el, i)|
      (el.hash + i.hash) ^ intermediate_hash
    end
  end
end

class String
  def hash
    chars.map(&:ord).hash
  end
end

class Hash
  def hash
    to_a.sort_by(&:hash).hash
  end
end
