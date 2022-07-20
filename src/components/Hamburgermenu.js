import { hamburgerActions } from "../store/hamburger-slice";
import { useDispatch} from "react-redux";

import styles from "../css/Hamburgermenu.module.css";
import close from "../assets/icon-close.svg";

const Hamburgermenu = () => {
    const dispatch = useDispatch();
    const closeHamburgerHandler = () => {
        dispatch(hamburgerActions.toggle());
      };
  return (
    <nav className={styles.hamburgermenu}>
      <img src={close} alt="close" onClick={closeHamburgerHandler} />
      <ol>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ol>
    </nav>
  );
};

export default Hamburgermenu;
