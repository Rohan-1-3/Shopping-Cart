import { Link } from "react-router-dom";
import { CartProp } from "../../Proptypes/PropTypes";
import styles from "../../css/Cart.module.css"
import CloseIcon from '@mui/icons-material/Close';
import CartItem from "./CartItem";
import { useMemo } from "react";
function Cart({cartItems, handleRemoveItemFromCart, handleIncreaseItemAmount,
    handleDecreaseItemAmount, isCartOpen, toggleCart, emptyCart}) {

    // calculation of total cost by memoizing the function
    const totalCost = useMemo(() => {
        return cartItems.reduce((sum, item) => sum + (item.amount * item.price), 0);
    }, [cartItems]);

    const handleCheckout = ()=>{ // closes the menu and empties the cart
        alert("Purchase Completed! You are directed to homepage");
        toggleCart();
        emptyCart();
    }

    return (
        <div className={`${styles.cart} ${isCartOpen ? styles.cartOpen : ""}`}>
            <div className={styles.cartContainer}>
                <div className={styles.cartHeader}>
                    <h2>Your Cart</h2>
                    <CloseIcon fontSize="large" onClick={toggleCart}/>
                </div>
                {
                    cartItems.length === 0 ?
                    <div className={styles.emptyCart}>Your cart is Empty. <span onClick={toggleCart}>Go back</span> to shopping.</div>
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
                <h3>Total Amount: ${totalCost}</h3>
                <Link className={cartItems.length === 0 ? "disabled" : ""} to="/home"><button  onClick={handleCheckout}>Checkout</button></Link>
            </div>
        </div>
    );
}

Cart.propTypes = CartProp;

  export default Cart;