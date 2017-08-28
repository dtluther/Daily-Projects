require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) do
    FactoryGirl.build(:user,
      username: "PapaKush",
      password: "good_password")
  end
  describe 'validations' do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6) }
    # it { should validate_presence_of(:session_token) }
  end

  describe 'associations' do
    it { should have_many(:goals) }
  end

  describe '::find_by_credentials' do
    it 'returns the a user if given good credentials' do
      expect(User.find_by_credentials("PapaKush", "good_password")).not_to eq(user)
    end

    it 'returns nil if given credentials are not in the database' do
      expect(User.find_by_credentials("PapaKush", "I'm a bad hacker")).to eq(nil)
    end
  end

end
