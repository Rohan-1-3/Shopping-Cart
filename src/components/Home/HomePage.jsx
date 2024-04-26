import { useOutletContext } from "react-router-dom";
import styles from "../../css/HomePage.module.css";
import ImageSlider from "./ImageSlider";

function HomePage() {

  const isOpen = useOutletContext().menuOpen[0];

    return (
        <div className={`${styles.homepage} ${isOpen ? "disabled" : ""}`}>
          <ImageSlider />
        </div>
    );
}

export default HomePage;