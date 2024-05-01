import { Link, useOutletContext } from 'react-router-dom';
import styles from "../../css/InitialPage.module.css"

function InitialPage() {
    // to disable any activties outside the opened screen
    const isOpen = useOutletContext().menuOpen[0];
    const isCartOpen = useOutletContext().isCartOpen;

    return (
        <div className={`${styles.initialPage} ${isOpen || isCartOpen? "disabled" : ""}`}>
            <h1>
                Welcome to our Cars Emporium! <br/><br/>
                <span>To begin your car-shopping adventure, simply click here to visit our
                <Link to="/home"> Home page </Link> and start exploring.</span>
            </h1>
        </div>
    );
}

export default InitialPage;