Rails.application.routes.draw do

  get "/" => "courses#show", constraints: lambda { |r| r.subdomain.present? && r.subdomain != "www" }
  
  # somehow i need to reroute the CNAME so that the subdomain of the domain points to the subdomain of the herokuapp, and I also need to reconfigure the app to read the subdomain of the herokuapp....
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