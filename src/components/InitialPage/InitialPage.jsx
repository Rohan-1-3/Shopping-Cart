import { Link } from 'react-router-dom';
import styles from "../../css/InitialPage.module.css"

function InitialPage() {

    return (
        <div className={styles.initialPage}>
            <h1>
                Welcome to our Cars Emporium! <br/><br/>
                <span>To begin your car-shopping adventure, simply click here to visit our
                <Link to="/home"> Home page </Link> and start exploring.</span>
            </h1>
        </div>
    );
}

export default InitialPage;