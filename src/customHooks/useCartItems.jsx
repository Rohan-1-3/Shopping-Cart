import { useEffect, useState } from "react";
import { carData } from "../data/CarData";

export function useCartItems(){
    const [cartItems, setCartItems] = useState([]);

    useEffect(()=>{
      const some =  cartItems.find(item => item.amount === 0)
      if(some){
        handleRemoveItemFromCart(some.id)
      }
    },[cartItems])

    const handleAddToCart = (id) => {
      // Check if the item with the provided id already exists in the cart
      const existingItemIndex = cartItems.findIndex(item => item.id === id);

      if (existingItemIndex !== -1) {
          // If the item exists in the cart, update its quantity
          handleIncreaseItemAmount(id)
      } else {
          // If the item doesn't exist in the cart, add it with quantity 1
          const newItem = carData.find(car => car.id === id);
          setCartItems([...cartItems, { ...newItem, amount: 1 }]);
      }
    };

    const handleRemoveItemFromCart = (id)=>{
      const updatedCartItems = cartItems.filter(item => item.id !== id)
      setCartItems(updatedCartItems);
      return updatedCartItems;
    }

    const handleIncreaseItemAmount = (id) => {
      // Find the index of the item with the provided id in the cart
      const itemIndex = cartItems.findIndex(item => item.id === id);

      if (itemIndex !== -1) {
          // If the item exists in the cart
          const updatedCartItems = cartItems.map((item, index) => {
              if (index === itemIndex) {
                  // If the current amount is less than 10, increment it
                  if (item.amount < 10) {
                      return { ...item, amount: item.amount + 1 };
                  } else {
                      // Otherwise, keep the amount unchanged
                      return item;
                  }
              } else {
                  // For other items, keep them unchanged
                  return item;
              }
          });

          // Update the state of cartItems
          setCartItems(updatedCartItems);
      } else {
          console.error(`Item with id ${id} not found in cart.`);
      }
  };

    const handleDecreaseItemAmount = (id) =>{
      const existingItemIndex = cartItems.findIndex(item => item.id === id);

      if (existingItemIndex !== -1) {
        // If the item exists in the cart, update its quantity
        const updatedCartItems = cartItems.map((item, index) =>{

          if(index === existingItemIndex){
              return {...item , amount: item.amount-1}
          }else{
            return item;
          }
        });
        setCartItems(updatedCartItems);
    }
    }

    return [cartItems, handleAddToCart, handleRemoveItemFromCart, handleIncreaseItemAmount, handleDecreaseItemAmount];
}