import './ProductsIndexItem.css'
import sf6 from '../../assets/SF6.png'
import star from '../../assets/5Star.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const ProductsIndexItem = ({product}) => {
    const beforeDecimal = parseInt(product.price)
    const afterDecimal = parseInt((product.price).toString().split('.')[1])

    return (
        <div className="outerImgDiv">  
            <div className="itemImgDiv">
                <Link className="itemLink" to={`/products/${product.id}`}><img className="itemImg" src={sf6}></img></Link>
            </div>
            <div className="itemBodyDiv">
                <Link to={`/products/${product.id}`}>
                    <p className="centerText">{product.name}</p>
                </Link>
                <div className="star">
                    <img src={star} alt="rating"></img>
                </div>
                <div className="price">
                    <p className="smallText">$</p>
                    <p className="largeText">{beforeDecimal}</p>
                    <p className="smallText">{afterDecimal}</p>
                </div>
            </div>
        </div>    
    )
}

export default ProductsIndexItem