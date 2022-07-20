import { useDispatch } from "react-redux";
import { hamburgerActions } from "../store/hamburger-slice";
import styles from "../css/Overlay.module.css";

const Overlay = () =>{
    const dispatch = useDispatch();
    const closeHamburgerHandler = () =>{
        dispatch(hamburgerActions.toggle());
    }
    return(
        <div className={styles.overlay} onClick={closeHamburgerHandler}>
    </div>
    )
}

export default Overlay;