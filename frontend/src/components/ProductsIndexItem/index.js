import './ProductsIndexItem.css'

const ProductsIndexItem = ({product}) => {
    return (
        <div className="itemDiv">
            <p>{product.name}</p>
        </div>
    )
}

export default ProductsIndexItem