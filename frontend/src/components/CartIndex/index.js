import { useDispatch } from "react-redux"
import { fetchProducts, getProducts } from "../../store/product"
import { useEffect } from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { fetchCartItems, getCartItems } from "../../store/cartItems"

const CartIndex = () => {
    const cartItems= useSelector(state => state.cartItems)
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const actualProducts = Object.values(cartItems).map(cartItem => ({
        ...products[cartItem.productId],
        quantity: cartItem.quantity
    }))
    
    useEffect(()=>{
        dispatch(fetchCartItems())
        dispatch(fetchProducts())
    }, [dispatch])

    useEffect(() => {
        console.log("actualProducts:", actualProducts);
    }, [actualProducts])
    return (
        <>
            <ul>
                {actualProducts.map(product => {
                    return (
                        <>
                            <li>{product.name}</li>
                            <li>{product.quantity}</li>
                        </>
                        )
                })}
            </ul>
        </>
    )
}

export default CartIndex