Rails.application.routes.draw do

  get "/search/:query" => "courses#search", as: "search_courses"

  root "courses#index"
  
  devise_for :users, controllers: { registrations: 'registrations' }
 
  resources :users do
    resources :courses, only: [:new, :create, :edit, :update, :delete, :destroy]
  end

  resources :courses, only: [:show]
end