class WelcomeController < ApplicationController
  def home
    if !current_user.is_a?(GuestUser)
      redirect_to area_path
    end
  end

  def about
  end
end
