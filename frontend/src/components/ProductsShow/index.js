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

    const beforeDecimal = parseInt(product.price)
    const afterDecimal = parseInt((product.price).toString().split('.')[1])

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
                <div className="showPrice"> 
                    <div>
                        <p className="smallText">$</p>
                    </div>
                    <div>
                        <p className="largeText">{beforeDecimal}</p>
                    </div>
                    <div>
                        <p className="smallText">{afterDecimal}</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div>
                    <p className="aboutItem">About This Item</p>
                    <li className="showDescription">{product.description}</li>
                </div>
                
            </div>
            <div className="purchase">
                <button>Add To Cart</button>
            </div>
            <div className="bottomDivider"></div>
        </div>    
    )
}

export default ProductsShow