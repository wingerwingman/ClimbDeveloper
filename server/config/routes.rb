Rails.application.routes.draw do
  resources :images
  resources :share_groups
  resources :areas
  resources :climbs
  resources :ticks
  resources :shared_users
  resources :comments
  resources :area_admins
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'auth/sign_in', to: 'auth#sign_in'

  # mount_devise_token_auth_for 'User', at: 'auth'

  get '/member-only', to: 'test#members_only'

  root to: 'test#members_only'
end
