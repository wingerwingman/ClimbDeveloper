require "rails_helper"

RSpec.describe SharedUsersController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/shared_users").to route_to("shared_users#index")
    end

    it "routes to #show" do
      expect(get: "/shared_users/1").to route_to("shared_users#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/shared_users").to route_to("shared_users#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/shared_users/1").to route_to("shared_users#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/shared_users/1").to route_to("shared_users#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/shared_users/1").to route_to("shared_users#destroy", id: "1")
    end
  end
end
