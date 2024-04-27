import { Outlet } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import styles from "../css/App.module.css"
import { useEffect, useState } from "react";
import MainFooter from "./MainFooter";
import { carData } from "../data/CarData";

function App() {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);
    const [userData, setUserData] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useEffect(()=>{
      console.log(cartItems)
    },[cartItems])

    const handelAddToCart = (id) => {
      // Check if the item with the provided id already exists in the cart
      const existingItemIndex = cartItems.findIndex(item => item.id === id);

      if (existingItemIndex !== -1) {
          // If the item exists in the cart, update its quantity
          const updatedCartItems = cartItems.map((item, index) =>
              index === existingItemIndex ? { ...item, amount: item.amount + 1 } : item
          );
          setCartItems(updatedCartItems);
      } else {
          // If the item doesn't exist in the cart, add it with quantity 1
          const newItem = carData.find(car => car.id === id);
          setCartItems([...cartItems, { ...newItem, amount: 1 }]);
      }
  };

  useEffect(()=>{
    if(fetchedData){
        const users = fetchedData.results.map(user =>({
            firstName : user.name.first,
            lastName : user.name.last,
            image : user.picture.large
        }))
    setUserData(users)
    }
  },[fetchedData])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=4');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setFetchedData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

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
      <NavBar isOpen={isOpen} isMobile={isMobile} toggleMenu={toggleMenu} cartLength = {cartItems.length}/>
      <MainFooter />
      <Outlet context = {
        {
          menuOpen : [isOpen, setIsOpen],
          viewportWidth : [viewportWidth, setViewportWidth],
          userData : userData,
          carData: cartItems,
          handleAdd : handelAddToCart
        }
      }/>
    </div>
  );
}

export default App;