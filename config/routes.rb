Rails.application.routes.draw do

  get "/search/:query" => "courses#search", as: "search_courses"

  root "users#new"
  
  resources :users

  resources :users do
    resources :courses, only: [:new, :create]
  end

  resources :courses, except: [:new, :create]
  resources :session, only: [:new, :create, :destroy]
end