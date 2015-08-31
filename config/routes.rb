Rails.application.routes.draw do

  get "", to: "courses#show",  constraints: lambda { |r| r.subdomain.present? && r.subdomain != "www" }

  root "home#index"

  controller :instructors do
    post '/instructor' => :create
    get '/instructor' => :show
    put '/instructor' => :update
    delete '/instructor' => :destroy
  end
  
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

  resources :users, only: %i(create show update destroy) do
    collection do
      get :pictures
    end
    member do
      get :data
    end
    resources :emails, only: [:index]
  end

  resources :emails, only: [:create]
  resources :session, only: [:new, :create, :destroy]
end