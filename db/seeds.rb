# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Product.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')

    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      name: 'Demo-lition', 
      email: 'demo@user.io', 
      password: 'password'
    )

    Product.create!(
      name:'Street Fighter 6',
      description: "Capcom's brand new fighting game",
      category: "game", 
      price: 69.99
    )
  
    # More users
    10.times do 
      User.create!({
        name: Faker::Name.name,
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end
  
    # More products
    10.times do
      Product.create!({
        name: Faker::Game.title,
        description: "Capcom's brand new fighting game",
        category: "game", 
        price: 69.99
      })
    end
    
    puts "Done!"
  end