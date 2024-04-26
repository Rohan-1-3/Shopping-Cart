import { Outlet } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import styles from "../css/App.module.css"
import { useEffect, useState } from "react";
import MainFooter from "./MainFooter";

function App() {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth);
    };

  // if the screen is resized to landscape close the menu
    useEffect(()=>{
        if(!isMobile) {
            setIsOpen(false);
        }
    },[isMobile])

    // managing the media at which transition occurs
    useEffect(()=>{
        viewportWidth < 550 ? setIsMobile(true) : setIsMobile(false);
    },[viewportWidth])

    useEffect(() => {
        window.addEventListener('resize', updateViewportWidth);

        // Remove event listener when component unmounts
        return () => {
          window.removeEventListener('resize', updateViewportWidth);
        };
      });

      // function to toggle the menu open and close
    const toggleMenu  = () => {
      setIsOpen(prevIsOpen => !prevIsOpen)
    }

  return (
    <div className={`${styles.mainContainer} roboto-regular` }>
      <NavBar isOpen={isOpen} isMobile={isMobile} toggleMenu={toggleMenu} />
      <MainFooter />
      <Outlet context = {
        {
          menuOpen : [isOpen, setIsOpen],
          viewportWidth : [viewportWidth, setViewportWidth]
        }
      }/>
    </div>
  );
}

export default App;