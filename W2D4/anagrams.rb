require 'byebug'
str1 = "day"
str2 = "ayd"
str3 = "ya"
str4 = "aijsd7sbaa"

def anagrams1(str1, str2)
  long_str = str1.length >= str2.length ? str1 : str2
  other_str = long_str == str1 ? str2 : str1


  anagrams = long_str.chars.permutation(long_str.length).to_a
  anagrams.map! do |arr_chars|
    arr_chars.join # We think join is n because it iterates over the array and removes chs
  end

  # p long_str
  # p other_str
  # p anagrams
  anagrams.include?(other_str)
  # p anagrams
end

# p anagrams1(str1, str2)
# p anagrams1(str1, str3)
# p anagrams1(str2, str3)
# p anagrams1(str1, str4)


# O(n!)- permutation. n! dominates n^2.

def anagrams2(str1, str2)
  # byebug
  # dup_1 = str1.dup
  # dup_2 = str2.dup
  arr1, arr2 = str1.chars, str2.chars
  arr1.each_with_index do |ch1, idx1|
    arr2.each_with_index do |ch2, idx2|
      if ch1 == ch2
        arr1.delete_at(idx1)
        arr2.delete_at(idx2)
      end
    end
  end
  #
  # p arr1
  arr1.empty? && arr2.empty?

  # chars1 = str1.chars
  # chars2 = str2.chars
  #
  # chars1.each do |ch1|
  #   chars2.each do |ch2|

end

# p anagrams2(str1, str2)
# p anagrams2(str1, str3)
# p anagrams2(str2, str3)
# p anagrams2(str1, str4)

def anagrams3(str1, str2)
  str1.chars.sort == str2.chars.sort
end

#Time complexity is n^2 log(n) b/c chars iterates(n) sort quicksorts(n^2). 

# p anagrams3(str1, str2)
# p anagrams3(str1, str3)
# p anagrams3(str2, str3)
# p anagrams3(str1, str4)

def anagrams4(str1, str2)
  hash1 = Hash.new(0)
  hash2 = Hash.new(0)

  str1.each_char do |char1|
    hash1[char1] += 1
  end

  str2.each_char do |char2|
    hash2[char2] += 1
  end

  hash1 == hash2
end

p anagrams4(str1, str2)
p anagrams4(str1, str3)
p anagrams4(str2, str3)
p anagrams4(str1, str4)

#Time complexity is O(n) b/c 2 separate iterations 1 time. so 2n..drop the constant
