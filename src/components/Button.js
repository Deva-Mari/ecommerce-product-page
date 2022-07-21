import styles from "../css/Button.module.css";
import cart from "../assets/icon-cart.svg";
const Button = () =>{
    return(<button className={styles.button}><img src={cart} alt="cart icon"/> Add to cart</button>)
}

export default Button;