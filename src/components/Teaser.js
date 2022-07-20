// import productImage from "../assets/image-product-1.jpg";
import next from "../assets/icon-next.svg";
import previous from "../assets/icon-previous.svg";
import styles from "../css/Teaser.module.css";
import { useState, useEffect } from "react";

const Teaser = () => {
const [productImage, setImage] = useState("");
const [counter, setCounter] = useState(1);
  useEffect(() => {
    import(`../assets/image-product-${counter}.jpg`).then((image) =>
      setImage(image.default)
    );
  }, [counter]);

  const nextClickHandler = () => {
    if (counter === 4) {
      setCounter(1);
    } else {
      setCounter((prevState) => {
        return prevState + 1;
      });
    }
  };
  const prevClickHandler = () => {
    if (counter === 1) {
      setCounter(4);
    } else {
      setCounter((prevState) => {
        return prevState - 1;
      });
    }
  };


  return (
    <div className={styles.teaser}>
      <img
        className={styles["product-image"]}
        src={productImage}
        alt="product image 1"
      />
      <div className={styles.buttons}>
        <div className={styles.button} onClick={prevClickHandler}>
          <img src={previous} alt="previous"/>
        </div>
        <div className={styles.button} onClick={nextClickHandler}>
          <img src={next} alt="next" />
        </div>
      </div>
    </div>
  );
};

export default Teaser;
