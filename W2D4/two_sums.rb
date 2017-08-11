arr = [0, 1, 5, 7]
# two_sum?(arr, 6) # => should be true
# two_sum?(arr, 10) # => should be false

def bad_two_sum?(arr, target_sum)

  arr.each_index do |idx1|
    idx2 = idx1 + 1
    break if idx1 == arr.length
    (idx2...arr.size).each do |idx2|
      return true if arr[idx1] + arr[idx2] == target_sum
    end
  end

  false
end

p bad_two_sum?(arr, 6)
p bad_two_sum?(arr, 16)
