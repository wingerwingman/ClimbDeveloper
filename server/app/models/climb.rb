class Climb < ApplicationRecord
    belongs_to :area_admin 
    has_many :shared_users 
    has_many :shared_groups 
end
