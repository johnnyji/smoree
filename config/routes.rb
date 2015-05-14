Rails.application.routes.draw do

  get "/" => "courses#show", constraints: { subdomain: /.+/ }
  root "users#new"

  # get "/students/mail_all" => "students#mail_all", as: "students_mail_all"
  # post "/students/mail" => "students#mail", as: "students_mail"
  # get "/courses/:id/info" => "courses#info", as: "courses_info"
  get "/search/:query" => "courses#search", as: "search_courses"
  
  resources :students do
    collection do
      get :mail
      get :mail_all
    end
  end

  resources :courses do
    member do
      get :info
    end
  end
  
  resources :users
  resources :session, only: [:new, :create, :destroy]
end