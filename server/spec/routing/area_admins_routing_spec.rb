require "rails_helper"

RSpec.describe AreaAdminsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/area_admins").to route_to("area_admins#index")
    end

    it "routes to #show" do
      expect(get: "/area_admins/1").to route_to("area_admins#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/area_admins").to route_to("area_admins#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/area_admins/1").to route_to("area_admins#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/area_admins/1").to route_to("area_admins#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/area_admins/1").to route_to("area_admins#destroy", id: "1")
    end
  end
end
