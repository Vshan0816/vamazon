class Api::CartItemsController < ApplicationController
    def index
        @cart_items = current_user.cart_items
        render json: @cart_items
    end
end
