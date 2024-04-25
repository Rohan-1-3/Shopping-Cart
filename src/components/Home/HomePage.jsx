import styles from "../../css/HomePage.module.css";
import ImageSlider from "./ImageSlider";

function HomePage() {


    return (
        <div className={styles.homepage}>
          <ImageSlider />
        </div>
    );
}

export default HomePage;