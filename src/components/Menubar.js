import Cart from "./Cart";
import { hamburgerActions } from "../store/hamburger-slice";
import { cartActions } from "../store/cart-slice";
import { useDispatch, useSelector} from "react-redux";

import styles from "../css/Menubar.module.css";
import menuIcon from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";


const Menubar = () => {
const dispatch = useDispatch();
const showCart = useSelector((state) => state.cart.showCart);

const showHamburgerHandler = () => {
    dispatch(hamburgerActions.toggle());
  };
const showCartHandler = () =>{
    dispatch(cartActions.toggle());
}

  return (
    <nav className={styles.menubar}>
      <div>
        <img src={menuIcon} alt="menu icon" onClick={showHamburgerHandler}/>
        <img src={logo} alt="sneakers logo" />
      </div>
      <div>
        <img src={cartIcon} alt="cart icon" style={{filter: showCart ? "brightness(.0)" : ""}} onClick={showCartHandler}/>
        <img src={avatar} alt="avatar" />
      </div>
      {showCart && <Cart/>}
    </nav>
  );
};

export default Menubar;
