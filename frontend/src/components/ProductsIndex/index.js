import { useDispatch } from "react-redux"
import { fetchProducts, getProducts } from "../../store/product"
import { useEffect } from "react"
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"

const ProductsIndex = () => {
    const products = useSelector(getProducts)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProducts())
    }, [dispatch])
    return (
        <ul>
            {products.map(product=>{
                return <li>{product.name}</li>
            })}
        </ul>
    )
}

export default ProductsIndex