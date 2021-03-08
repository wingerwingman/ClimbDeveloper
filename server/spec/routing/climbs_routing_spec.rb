require "rails_helper"

RSpec.describe ClimbsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/climbs").to route_to("climbs#index")
    end

    it "routes to #show" do
      expect(get: "/climbs/1").to route_to("climbs#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/climbs").to route_to("climbs#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/climbs/1").to route_to("climbs#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/climbs/1").to route_to("climbs#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/climbs/1").to route_to("climbs#destroy", id: "1")
    end
  end
end
