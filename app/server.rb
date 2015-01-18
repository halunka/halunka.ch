require 'sinatra'
require 'haml'
require 'pony'

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

  post '/contact' do
    name = #{params[:name]}
    surname = #{params[:name]}
    mail = #{params[:mail]}
    message = #{params[:body]}     
    Pony.mail(:to => 'mail@halunka.ch', :from => mail, :subject => 'Contact Form halunka.ch' + name + surname, :body => body) 
    end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
