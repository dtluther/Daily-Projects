# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  name       :stringx
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord
  validates :name, presence: true
  has_many :enrollments,
    class_name: :Enrollment,
    primary_key: :id,
    foreign_key: :student_id

  has_many :enrolled_courses,
    through: :enrollments,
    source: :course

end

#we migrated, where can we see our dbs?
# What is the best to test without manipulating the db?

# if these are okay, what's the next step? Migrate?
