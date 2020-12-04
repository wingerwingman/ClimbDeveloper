class GuestUser < ApplicationRecord

    class GuestUser < User
        attr_accessor :name, :first_name, :last_name, :email
    end

end
