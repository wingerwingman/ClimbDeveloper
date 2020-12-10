class WelcomeController < ApplicationController
  def home
    if !current_user.is_a?(GuestUser)
      redirect_to '/areas'
    end
  end

  def app
  end

  def about
  end
end
