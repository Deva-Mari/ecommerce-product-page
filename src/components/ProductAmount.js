import styles from "../css/ProductAmount.module.css";
import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";

const ProductAmount = () => {
  return (
    <div className={styles.amount}>
      <img src={minus} alt="minus" />
      <p className={styles.counter}>0</p>
      <img src={plus} alt="plus" />
    </div>
  );
};

export default ProductAmount;
