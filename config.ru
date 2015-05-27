# This file is used by Rack-based servers to start the application.

require ::File.expand_path('../config/environment', __FILE__)
run Rails.application

require "rack/cors"
use Rack::Cors do
  allow do
    origins "*"
    resource "*",
        :methods => [:get, :post, :put, :delete, :options],
        headers: :any
        # headers to expose
  end

  allow do
    origins '*'
    resource '/public/*', :headers => :any, :methods => :get
  end
end
