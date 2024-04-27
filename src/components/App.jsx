import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./Navbar/NavBar";
import MainFooter from "./MainFooter";
import { useViewportWidth } from "../customHooks/viewportWidth";
import { useCartItems } from "../customHooks/useCartItems";
import styles from "../css/App.module.css"

function App() {
    const viewportWidth = useViewportWidth();
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, handleAddToCart] = useCartItems();

  // if the screen is resized to landscape close the menu
    useEffect(()=>{
        if(!isMobile) {
            setIsMenuOpen(false);
        }
    },[isMobile])

    // managing the media at which transition occurs
    useEffect(()=>{
        viewportWidth < 550 ? setIsMobile(true) : setIsMobile(false);
    },[viewportWidth])

      // function to toggle the menu open and close
    const toggleMenu  = () => {
      setIsMenuOpen(prevIsOpen => !prevIsOpen)
    }

    const toggleCart = () =>{
      setIsCartOpen(prev => !prev);
    }

  return (
    <div className={`${styles.mainContainer} roboto-regular` }>
      <NavBar
      isOpen={isMenuOpen}
      isMobile={isMobile}
      toggleMenu={toggleMenu}
      isCartOpen = {isCartOpen}
      toggleCart = {toggleCart}
      cartLength = {cartItems.length}/>
      <MainFooter />
      <Outlet context = {
        {
          menuOpen : [isMenuOpen, setIsMenuOpen],
          handleAddToCart : handleAddToCart,
        }
      }/>
    </div>
  );
}

export default App;