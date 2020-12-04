class Comment < ApplicationRecord
    validates_presence_of :content 

    belongs_to :area
    belongs_to :user
end
