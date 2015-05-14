Rails.application.routes.draw do

  get "/" => "courses#show", constraints: { subdomain: /.+/ }
  root "users#new"
  
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