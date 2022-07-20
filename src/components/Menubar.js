import { hamburgerActions } from "../store/hamburger-slice";
import { useDispatch} from "react-redux";

import styles from "../css/Menubar.module.css";
import menuIcon from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";


const Menubar = () => {
const dispatch = useDispatch();

const showHamburgerHandler = () => {
    dispatch(hamburgerActions.toggle());
  };

  return (
    <nav className={styles.menubar}>
      <div>
        <img src={menuIcon} alt="menu icon" onClick={showHamburgerHandler}/>
        <img src={logo} alt="sneakers logo" />
      </div>
      <div>
        <img src={cartIcon} alt="cart icon" />
        <img src={avatar} alt="avatar" />
      </div>
    </nav>
  );
};

export default Menubar;
