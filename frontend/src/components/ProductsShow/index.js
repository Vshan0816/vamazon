import { useDispatch } from "react-redux"
import { fetchProduct, getProduct} from "../../store/product"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import sf6 from '../../assets/SF6.png'
import './ProductsShow.css'
import { createCartItem } from "../../store/cartItems"
import { useHistory } from "react-router-dom/cjs/react-router-dom"


const ProductsShow = () => {
    

    const { productId } = useParams()
    const dispatch = useDispatch();
    const history = useHistory()
    const product = useSelector(getProduct(productId))
    

    const beforeDecimal = parseInt(product.price)
    const afterDecimal = parseInt((product.price).toString().split('.')[1])

    useEffect(()=>{
        dispatch(fetchProduct(productId))
        const storageCurrentUser = sessionStorage.getItem('currentUser')
        console.log(storageCurrentUser)
        setCurrentUser(storageCurrentUser)
    }, [productId, dispatch])

    const [quantity, setQuantity] = useState(0)
    const [currentUser, setCurrentUser] = useState(null)

    const handleClick = async (e) => {
        e.preventDefault()
        if (currentUser !== null) {
            await dispatch(createCartItem({quantity, product_id: product.id}))
            .then(history.push('/cart'))
        }
    }

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
                <label>Quantity</label>
                <input type="text" onChange={e => setQuantity(e.target.value)} value={quantity}></input>
                <button className="button2" onClick={handleClick}>Add To Cart</button>
            </div>
            <div className="bottomDivider"></div>
        </div>    
    )
}

export default ProductsShow