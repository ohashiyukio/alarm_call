class ApplicationController < ActionController::Base
  puts "GOOGLE_APPLICATION_CREDENTIALS: #{ENV['GOOGLE_APPLICATION_CREDENTIALS']}"
end
