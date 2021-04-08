# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

case Rails.env
  when "development"
    User.create(:email => 'jhondoe@example.com', :password =>'test1234', :password_confirmation => 'test1234', :name => 'John Doe', :admin => false)
    User.create(:email => 'justinwinger4@gmail.com', :password => 'Password', :password_confirmation => 'Password', :name => 'Justin Winger:', :admin => true)
    Area.create(:name => "Dog house", :country => "United States", :state => "Colorado")
    Area.create(:name => "Cochise Stronghold", :country => "United States", :state => "Arizona")
end
