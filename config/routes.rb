Rails.application.routes.draw do

  get "/search/:query" => "courses#search", as: "search_courses"

  root "users#new"
  
  resources :users
  resources :courses
  resources :session, only: [:new, :create, :destroy]
end