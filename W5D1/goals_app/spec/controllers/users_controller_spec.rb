require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  subject(:jeff) do
    User.create!(
      username: "DaddyJeff",
      password: "password"
    )
  end

  describe 'GET #new' do
    it 'renders the new users page' do
      # this line simulates a "GET" request that hits the Users #new method
      # passing in '{user: {}}'
      get :new

      expect(response).to render_template('new')
    end
  end

  describe 'POST #create' do
    context 'with invalid params' do
      it 'validates the presence of username and password(_digest)' do
        post :create, params: { user: {username: "Kush", password: "abc"} }
      end

      it "validates the password is at least 6 characters long" do
        post :create, params: { user: { username: "Faker", password: "short" } }
        expect(response).to render_template('new')
        expect(flash[:errors]).to be_present
      end
    end

    context 'with valid params' do
      it 'redirects to the goals index page' do
        post :create, params: { user: { username: "realuser", password: "valid_pw"} }
        # expect(user).to receive(login!)
        expect(response).to redirect_to(goals_url)
      end
    end
  end
end
