import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./Navbar/NavBar";
import MainFooter from "./MainFooter";
import { useViewportWidth } from "../customHooks/viewportWidth";
import { useCartItems } from "../customHooks/useCartItems";
import styles from "../css/App.module.css"
import Cart from "./Cart/Cart";

function App() {
    const viewportWidth = useViewportWidth();
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, handleAddToCart, handleRemoveItemFromCart,
      handleIncreaseItemAmount, handleDecreaseItemAmount, emptyCart] = useCartItems();
    const [isLogIn, setIsLogin] = useState(false);

    useEffect(()=>{
      setIsLogin(sessionStorage.getItem("login") === "true")
    },[])

    useEffect(()=>{
      sessionStorage.setItem("login", isLogIn);
    },[isLogIn])

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
    <div className={`${styles.mainContainer}` }>
      {isLogIn
        ? <React.Fragment>
          <NavBar
          isOpen={isMenuOpen}
          isMobile={isMobile}
          toggleMenu={toggleMenu}
          toggleCart = {toggleCart}
          cartLength = {cartItems.length}
          isCartOpen={isCartOpen}
          />

          <Cart
            cartItems ={ cartItems}
            handleAddToCart = {handleAddToCart}
            handleRemoveItemFromCart = {handleRemoveItemFromCart}
            handleDecreaseItemAmount = {handleDecreaseItemAmount}
            handleIncreaseItemAmount = {handleIncreaseItemAmount}
            isCartOpen = {isCartOpen}
            toggleCart = {toggleCart}
            emptyCart = {emptyCart}
          />
          <MainFooter />
          <Outlet context = {
            {
              menuOpen : [isMenuOpen, setIsMenuOpen],
              isCartOpen : isCartOpen,
              handleAddToCart : handleAddToCart,

            }
          }/>
        </React.Fragment> : (
          <div className={styles.login}>
            <Link to="/:"><button onClick={()=>setIsLogin(true)}>Log In as Guest</button></Link>
          </div>
        )
      }
    </div>
  );
}

export default App;