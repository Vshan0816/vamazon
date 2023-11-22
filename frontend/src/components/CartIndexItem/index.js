import { useDispatch } from "react-redux"
import { deleteCartItem } from "../../store/cartItems"

const CartIndexItem = ({ product }) => {
    const dispatch = useDispatch()
    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteCartItem(product.cartItemId))
    }

    if (product) {
        return (
            <div className="cartItem">
                <li>{product?.name}</li>
                <li>{product?.quantity}</li>
                <button onClick={handleDelete}>Delete</button>
            </div>
        )
    }
}

export default CartIndexItem