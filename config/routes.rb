Rails.application.routes.draw do
  resources :areas
  root to: 'welcome#home'
  get 'about', to: 'welcome#about'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
