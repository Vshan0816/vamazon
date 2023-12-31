class Product < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :category, presence: true
    validates :description, presence: true
    validates :price, presence: true

    has_many :cart_items
end
