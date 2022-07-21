import CartContent from "./CartContent";
import styles from "../css/Cart.module.css";
const Cart = () =>{
    return(<div className={styles.cart}>
        <p>Cart</p>
        <hr/>
        <CartContent/>
    </div>)
}

export default Cart;