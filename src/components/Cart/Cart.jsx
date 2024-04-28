import { Link } from "react-router-dom";
import { CartProp } from "../../Proptypes/PropTypes";
import styles from "../../css/Cart.module.css"
import CloseIcon from '@mui/icons-material/Close';
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
function Cart({cartItems, handleRemoveItemFromCart, handleIncreaseItemAmount, handleDecreaseItemAmount, isCartOpen, toggleCart}) {
    const [totalCost, setTotalCost] = useState(0);

    useEffect(()=>{
       const some = cartItems.map(item => item.amount * item.price)
       let sum = 0;
       some.forEach((el) => sum += el)
       setTotalCost(sum)

    },[cartItems])

    return (
        <div className={`${styles.cart} ${isCartOpen ? styles.cartOpen : ""}`}>
            <div className={styles.cartContainer}>
                <div className={styles.cartHeader}>
                    <h2>Your Cart</h2>
                    <CloseIcon fontSize="large" onClick={toggleCart}/>
                </div>
                {
                    cartItems.length === 0 ?
                    <div className={styles.emptyCart}>Your cart is Empty</div>
                    :<div className={styles.cartItems}>
                        {
                            cartItems.map(item => <CartItem key={item.id} item={item}
                                handleRemoveItemFromCart = {handleRemoveItemFromCart}
                                handleDecreaseItemAmount = {handleDecreaseItemAmount}
                                handleIncreaseItemAmount = {handleIncreaseItemAmount}
                                />)
                        }
                    </div>
                }
                <h3>Total Amout: {totalCost}</h3>
                <Link to="/checkout"><button>Checkout</button></Link>
            </div>
        </div>
    );
}

Cart.propTypes = CartProp;

  export default Cart;