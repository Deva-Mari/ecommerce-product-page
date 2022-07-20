import styles from "../css/Description.module.css";

const Description = () => {
  return (
    <article className={styles.description}>
      <h1>Sneaker Company</h1>
      <h2>Fall Limited Edition Sneakers</h2>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
    </article>
  );
};

export default Description;
