import styles from "../../css/Products.module.css"
import { carData } from '../../data/CarData';
import ProductCard from './ProductCard';
import { useOutletContext } from 'react-router-dom';

function Products() {
    const handleAdd = useOutletContext().handleAdd;
    const isOpen = useOutletContext().menuOpen[0];

    return (
        <div className={`${styles.products} ${isOpen ? "disabled" : ""}`}>
            <div className={styles.productCards}>
            {carData.map((car) => (
                <ProductCard
                    key={car.id}
                    imageUrl={car.imageUrl}
                    productName={car.productName}
                    model={car.model}
                    price={car.price}
                    onAddToCart={() => handleAdd(car.id)} // Assuming you have a function to handle adding to cart
                />
            ))}
            </div>
        </div>
    );
}

export default Products;