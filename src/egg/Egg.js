import styles from "./Egg.module.css";

function Egg() {
  return (
    <div className={styles.container}>
      <div id={styles.face}>
        <div id={styles.eyebrows}>
          <div className={styles.brow} id={styles.brow1}></div>
          <div className={styles.brow} id={styles.brow2}></div>
        </div>
        <div id={styles.eyes}>
          <div className={styles.eye} id={styles.eye1}></div>
          <div className={styles.eye} id={styles.eye1}></div>
        </div>
        <div id={styles.mouth}></div>
      </div>
    </div>
  );
}
export default Egg;
