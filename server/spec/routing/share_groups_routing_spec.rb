require "rails_helper"

RSpec.describe ShareGroupsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/share_groups").to route_to("share_groups#index")
    end

    it "routes to #show" do
      expect(get: "/share_groups/1").to route_to("share_groups#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/share_groups").to route_to("share_groups#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/share_groups/1").to route_to("share_groups#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/share_groups/1").to route_to("share_groups#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/share_groups/1").to route_to("share_groups#destroy", id: "1")
    end
  end
end
