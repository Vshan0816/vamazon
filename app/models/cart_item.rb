class CartItem < ApplicationRecord
    validates :product_id, presence:true
    validates :user_id, presence:true
    validates :quantity, presence:true

    belongs_to :user
end
