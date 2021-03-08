require "rails_helper"

RSpec.describe TicksController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/ticks").to route_to("ticks#index")
    end

    it "routes to #show" do
      expect(get: "/ticks/1").to route_to("ticks#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/ticks").to route_to("ticks#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/ticks/1").to route_to("ticks#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/ticks/1").to route_to("ticks#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/ticks/1").to route_to("ticks#destroy", id: "1")
    end
  end
end
