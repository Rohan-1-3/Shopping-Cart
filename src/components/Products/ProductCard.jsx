import styles from "../../css/Products.module.css"
import { ProductCardProp } from "../../Proptypes/PropTypes";

const ProductCard = ({ imageUrl, productName, model, price, onAddToCart }) => {
    return (
        <div className={styles.productCard}>
            <img src={imageUrl} alt={productName} />
            <div className={styles.productText}>
                <p>{productName}</p>
                <p>{model}</p>
                <p>Price: ${price}</p>
                <button onClick={onAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

ProductCard.propTypes = ProductCardProp;

export default ProductCard;
