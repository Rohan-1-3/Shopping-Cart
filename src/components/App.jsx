import { Outlet } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import styles from "../css/App.module.css"

function App() {
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <Outlet context = {[]}/>
    </div>
  );
}

export default App;