class ApplicationController < ActionController::Base

    include CurrentUserConcern

    before_action :configure_permitted_parameters, if: :devise_controller?
    
    
    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :dob, :user_name, :location, :gender])
        devise_parameter_sanitizer.permit(:account_update, keys: [:name, :dob, :user_name, :location, :gender])
    end

end
