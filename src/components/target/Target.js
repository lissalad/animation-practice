import styles from "./Target.module.css";

function Target() {
  return (
    <div className={styles.container}>
      <div className={styles.circle} id={styles.circle1}></div>
      <div className={styles.circle} id={styles.circle2}></div>
      <div className={styles.circle} id={styles.circle3}></div>
      <div className={styles.circle} id={styles.circle4}></div>
      <div className={styles.circle} id={styles.circle5}></div>
      <div className={styles.circle} id={styles.circle6}></div>
      <div className={styles.circle} id={styles.circle7}></div>
    </div>
  );
}
export default Target;
