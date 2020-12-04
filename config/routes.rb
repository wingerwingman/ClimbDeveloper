Rails.application.routes.draw do
  devise_for :users, path: "", path_names: { sign_in: "login", sign_out: "logout", sign_up: "register" }
  resources :areas
  root to: 'welcome#home'
  get 'about', to: 'welcome#about'

  resources :areas do
    resources :comments, only: [:create]
    member do
      get :get_comments
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
