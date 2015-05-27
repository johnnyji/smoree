Rails.application.routes.draw do

  get "", to: "courses#show",  constraints: lambda { |r| r.subdomain.present? && r.subdomain != "www" }
  root "users#new"
  
  resources :students do
    collection do
      post :mail
    end
  end

  resources :courses do
    member do
      get :info
      get :data
    end
  end

  resources :users do
    collection do
      get :data
    end
    resources :emails, only: [:index]  
  end

  resources :emails, only: [:create]
  resources :session, only: [:new, :create, :destroy]
end