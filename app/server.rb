require 'sinatra'
require 'data_mapper'
require 'haml'
require 'rack-flash'

class HK < Sinatra::Base

	set :views, settings.root + '/views/'
	set :public_dir, settings.root + '/public/'
  set :session_secret, 'ooc-woox-rom-ac'
	enable :sessions
  use Rack::Flash

  get '/' do
    haml :index, :locals => {:title => 'Welcome'}
  end

  get '/about' do
    haml :about, :locals => {:title => 'About'}
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
