class Area < ApplicationRecord
    has_one :area_admin 
    has_many :shared_users 
    has_many :shared_groups 
end
