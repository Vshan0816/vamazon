import './ProductsIndexItem.css'
import sf6 from '../../assets/SF6.png'
const ProductsIndexItem = ({product}) => {
    return (
        <div className="outerImgDiv">  
            <div className="itemImgDiv">
                <img src={sf6}></img>
            </div>
            <div className="itemDiv">
                <p>{product.name}</p>
            </div>
        </div>    
    )
}

export default ProductsIndexItem