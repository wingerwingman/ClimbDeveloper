class AreaAdmin < ApplicationRecord
    has_one :user
    has_one :area 
end
