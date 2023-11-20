class Api::CartItemsController < ApplicationController
    before_action :require_logged_in

    def index
        @cart_items = current_user.cart_items
        render :index
    end

    def create
        @cart_item = current_user.cart_items.build(cart_item_params)
    
        if @cart_item.save
          render json: @cart_item, status: :created
        else
          render json: @cart_item.errors, status: :unprocessable_entity
        end
      end
    
      def update
        @cart_item = current_user.cart_items.find(params[:id])
        if @cart_item.update(cart_item_params)
          render json: @cart_item
        else
          render json: @cart_item.errors, status: :unprocessable_entity
        end
      end
    
      def destroy
        @cart_item = current_user.cart_items.find(params[:id])
        @cart_item.destroy
        head :no_content
      end
    
      private
    
      def cart_item_params
        params.require(:cart_item).permit(:product_id, :quantity)
      end
end
