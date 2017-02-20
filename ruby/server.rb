require 'sinatra'

set :port, 3001

get '/*' do
  'Hello world!'
end

post '/*' do
  'Hello world!'
end
