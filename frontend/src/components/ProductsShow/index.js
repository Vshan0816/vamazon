import { useDispatch } from "react-redux"
import { fetchProduct, getProduct} from "../../store/product"
import { useEffect } from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
const ProductsShow = () => {
    const { productId } = useParams()
    const dispatch = useDispatch();
    const product = useSelector(getProduct(productId))

    useEffect(()=>{
        dispatch(fetchProduct(productId))
    }, [productId, dispatch])
    return (
        <ul>
            <li>{product.name}</li>
            <li>{product.description}</li>
        </ul>
    )
}

export default ProductsShow