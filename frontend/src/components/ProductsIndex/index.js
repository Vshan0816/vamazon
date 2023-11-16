import { useDispatch } from "react-redux"
import { fetchProducts, getProducts } from "../../store/product"
import { useEffect } from "react"
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"
import './ProductsIndex.css'
import ProductsIndexItem from "../ProductsIndexItem"

const ProductsIndex = () => {
    const products = useSelector(getProducts)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProducts())
    }, [dispatch])
    return (
        <div className="productsIndex">
            <div className="leftDiv"></div>
            <div className="rightDiv">
                    {products.map(product=>{
                        return <ProductsIndexItem key={product.id} product={product}/>
                    })}
            </div>
        </div>
    )
}

export default ProductsIndex