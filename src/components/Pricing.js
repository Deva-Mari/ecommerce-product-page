import styles from "../css/Pricing.module.css";

const Pricing = () =>{
    const originalPrice = 250;
    const discount = .5;
    const currentPrice = originalPrice * discount; 
    return (
        <article className={styles.pricing}>
            <p className={styles["current-price"]}>${currentPrice.toFixed(2)}</p>
            <p className={styles.discount}>{discount*100}%</p>
            <p className={styles["original-price"]}>${originalPrice.toFixed(2)}</p>
        </article>
    );
}

export default Pricing;