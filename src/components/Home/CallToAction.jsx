import { Link } from 'react-router-dom';
import styles from "../../css/HomePage.module.css"

function CallToAction() {
    return (
        <div className={styles.callToAction}>
            <h1>Drive into Your Dream: Your Ultimate Car Shopping Destination!</h1>
            <p>
                Rev up your engine and <span>explore our latest collection</span>! Head to the Products page now to find your perfect ride.
            </p>
            <Link to="/products">
                <button>Shop Now</button>
            </Link>
        </div>
    );
}

export default CallToAction;