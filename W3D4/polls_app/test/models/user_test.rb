# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  username   :string(20)       not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
