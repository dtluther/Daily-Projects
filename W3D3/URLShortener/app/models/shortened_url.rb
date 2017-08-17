# == Schema Information
#
# Table name: shortened_urls
#
#  id         :integer          not null, primary key
#  short_url  :string           not null
#  long_url   :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'securerandom'

class ShortenedUrl < ApplicationRecord
  validates :short_url, presence: true, uniqueness: true
  validates :long_url, :user_id, presence: true


  def self.random_code
    code = SecureRandom::urlsafe_base64
    until !self.exists?(short_url: code)
      code = SecureRandom::urlsafe_base64
    end

    code
  end

  def self.shorten_url(user_id, long_url)
    shortened_url = ShortenedUrl.random_code

    ShortenedUrl.create!(short_url: shortened_url, long_url: long_url, user_id: user_id)
  end

  belongs_to :submitter,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id,
    optional: true

end
