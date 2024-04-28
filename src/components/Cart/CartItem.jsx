import styles from "../../css/Cart.module.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CartItemProp } from '../../Proptypes/PropTypes';

function CartItem({item, handleRemoveItemFromCart, handleIncreaseItemAmount, handleDecreaseItemAmount}) {
    return (
        <div key={item.id} className={styles.cartItem}>
            <img src={item.imageUrl} alt={item.model} />
            <div className={styles.itemText}>
                <p>{item.productName}</p>
                <p>{item.model}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.amount}</p>
                <div className={styles.cartItemIcon}>
                    <AddIcon onClick={()=>handleIncreaseItemAmount(item.id)}/>
                    <DeleteForeverIcon onClick={()=>handleRemoveItemFromCart(item.id)}/>
                    <RemoveIcon onClick={()=>handleDecreaseItemAmount(item.id)}/>
                </div>
            </div>
        </div>

    );
}

CartItem.propTypes = CartItemProp;

export default CartItem;