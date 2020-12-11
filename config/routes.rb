Rails.application.routes.draw do
  devise_for :users, path: "", path_names: { sign_in: "login", sign_out: "logout", sign_up: "register" }
  root to: 'welcome#home'
  get 'about', to: 'welcome#about'
  get 'app', to: 'welcome#app'
  
  namespace :api do 
    namespace :v1 do 
      resources :areas
      resources :areas do
        resources :comments, only: [:create]
        member do
          get :get_comments
        end
      end
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
