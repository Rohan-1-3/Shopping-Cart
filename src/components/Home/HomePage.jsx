import { useOutletContext } from "react-router-dom";
import styles from "../../css/HomePage.module.css";
import ImageSlider from "./ImageSlider";
import CallToAction from "./CallToAction";
import Reviews from "./Reviews";
import Footer from "./Footer";

function HomePage() {

  const isOpen = useOutletContext().menuOpen[0];

    return (
        <div className={`${styles.homepage} ${isOpen ? "disabled" : ""}`}>
          <ImageSlider />
          <CallToAction />
          <Reviews />
          <Footer />
        </div>
    );
}

export default HomePage;