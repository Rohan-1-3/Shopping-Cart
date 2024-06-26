import styles from "../../css/Products.module.css"
import { carData } from '../../data/CarData';
import ProductCard from './ProductCard';
import { useOutletContext } from 'react-router-dom';

function Products() {
    const handleAdd = useOutletContext().handleAddToCart;
    // to disable any activties outside the opened screen
    const isOpen = useOutletContext().menuOpen[0];
    const isCartOpen = useOutletContext().isCartOpen;

    return (
        <div className={`${styles.products} ${isOpen || isCartOpen ? "disabled" : ""}`}>
            <div className={styles.productCards}>
            {carData.map((car) => (
                <ProductCard
                    key={car.id}
                    imageUrl={car.imageUrl}
                    productName={car.productName}
                    model={car.model}
                    price={car.price}
                    onAddToCart={() => handleAdd(car.id)}
                />
            ))}
            </div>
        </div>
    );
}

export default Products;