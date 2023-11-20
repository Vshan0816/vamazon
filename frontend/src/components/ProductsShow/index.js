import { useDispatch } from "react-redux"
import { fetchProduct, getProduct} from "../../store/product"
import { useEffect } from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import sf6 from '../../assets/SF6.png'
import './ProductsShow.css'
const ProductsShow = () => {
    const { productId } = useParams()
    const dispatch = useDispatch();
    const product = useSelector(getProduct(productId))

    useEffect(()=>{
        dispatch(fetchProduct(productId))
    }, [productId, dispatch])
    return (
        <div className="showOuterDiv">
            
            <div className="div1"></div>
            <div className="showImageDiv">
                <img src={sf6} alt="StreetFighter6" className="showImage" />
            </div>
            <div className="showBodyDiv">
                
                <p className="showName">{product.name}</p>
                <div className="divider"></div>
                <p className="showDescription">{product.description}</p>
                
            </div>
        </div>    
    )
}

export default ProductsShow