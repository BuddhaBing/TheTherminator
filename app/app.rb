require 'sinatra/base'

class Therminator < Sinatra::Base
  get '/' do
    headers 'Access-Control-Allow-Origin' => '*'
    erb :therminator
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
