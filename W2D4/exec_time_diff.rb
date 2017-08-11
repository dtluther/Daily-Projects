require 'byebug'
list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]

def my_min1(array)

  array.each do |el|
    return el if array.all? { |element| element >= el }
  end
end
# The time complexity of my_min1 is n^2 because time complexity of each 'each' is n

def my_min2(array)
  min = array.first

  array[1..-1].each do |el|
    min = el if el < min
  end

  min
end

#time complexity of my_min2 is n

list_subsum = [2, 3, -6, 7, -6, 7]
def my_sub_sum1(array)
  subsums_array = []

  array.each_index do |idx1| #O(n^2)
    array.each_index do |idx2|
      subsums_array << array[idx1..idx2] if idx2 >= idx1
    end
  end

  subsums = subsums_array.map do |subarray| # O(n^2)
    subarray.reduce(&:+)
  end

  subsums.max # O(n)

end

#time complexity of my_sub_sum1 is n^2 because N^2 dominates the other
# time complexities.
my_sub_sum1(list_subsum)

def my_sub_sum2(array)
  max_subsum = 0
  current_sum = 0

  array.each do |el|
    current_sum = current_sum + el < 0 ? 0 : current_sum + el
    if current_sum > max_subsum
      max_subsum = current_sum
    end
  end

  max_subsum == 0 ? max_subsum.max : max_subsum
end

# The Time Complexity O(n) because there is only 1 enumerable.
# The Space Complexity is O(1) because it's only storing two digits
# the entire time. The amount of digits stored in each does no

p my_sub_sum2(list_subsum)
