import './ProductsIndexItem.css'
import sf6 from '../../assets/SF6.png'
const ProductsIndexItem = ({product}) => {
    return (
        <div className="outerImgDiv">  
            <div className="itemImgDiv">
                <img src={sf6}></img>
            </div>
            <div className="itemBodyDiv">
                <p className="centerText">{product.name}</p>
                <br/>
                <p className="centerText">{product.price}</p>
            </div>
        </div>    
    )
}

export default ProductsIndexItem