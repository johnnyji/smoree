Rails.application.routes.draw do

  root "users#new"
  get "/" => "courses#show", constraints: { subdomain: /.+/ }

  get "/students/mail_all" => "students#mail_all", as: "students_mail_all"
  post "/students/mail" => "students#mail", as: "students_mail"
  get "/courses/:id/info" => "courses#info", as: "courses_info"
  get "/search/:query" => "courses#search", as: "search_courses"
  
  resources :students
  resources :users
  resources :courses
  resources :session, only: [:new, :create, :destroy]
end