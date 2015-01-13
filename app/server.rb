require 'sinatra'
require 'haml'

class HK < Sinatra::Base

	set :views, settings.root + '/views/'
	set :public_dir, settings.root + '/public/'
  set :session_secret, 'ooc-woox-rom-ac'
	enable :sessions

  get '/' do
    haml :index, :locals => {:title => 'Welcome'}
  end

  get '/about' do
    haml :about, :locals => {:title => 'About'}
  end

  get '/contact' do
    haml :contact, :locals => {:title => 'Contact'}
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
