import { useOutletContext } from "react-router-dom";
import styles from "../../css/HomePage.module.css";
import ImageSlider from "./ImageSlider";
import CallToAction from "./CallToAction";
import Reviews from "./Reviews";
import Footer from "./Footer";

function HomePage() {
  // to disable any activties outside the opened screen
  const isOpen = useOutletContext().menuOpen[0];
  const isCartOpen = useOutletContext().isCartOpen;

    return (
        <div className={`${styles.homepage} ${isOpen || isCartOpen? "disabled" : ""}`}>
          <ImageSlider />
          <CallToAction />
          <Reviews />
          <Footer />
        </div>
    );
}

export default HomePage;