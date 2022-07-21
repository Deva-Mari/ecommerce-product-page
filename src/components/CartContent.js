import styles from "../css/CartContent.module.css";
import thumbnail from "../assets/image-product-1-thumbnail.jpg";
import trash from "../assets/icon-delete.svg"; 

const CartContent = () => {
  return (
    <div className={styles["cart-content"]}>
      {/* <p>Your cart is empty</p> */}
      <div className={styles.row}>
        <img className={styles.thumb} src={thumbnail} alt="product thumbnail"/>
        <article>
            <p>Autumn Limited Edition...</p>
            <p>$125.00 x 3 <span>$375.00</span></p>
        </article>
        <img src={trash} alt="delete"/>
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default CartContent;
