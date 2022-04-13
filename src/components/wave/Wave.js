import styles from "./Wave.module.css";

function Wave() {
  return (
    <div className={styles.container}>
      <div className={styles.bar} id={styles.bar1}></div>
      <div className={styles.bar} id={styles.bar2}></div>
      <div className={styles.bar} id={styles.bar3}></div>
      <div className={styles.bar} id={styles.bar4}></div>
      <div className={styles.bar} id={styles.bar5}></div>
      <div className={styles.bar} id={styles.bar6}></div>
      <div className={styles.bar} id={styles.bar7}></div>
      <div className={styles.bar} id={styles.bar8}></div>
      <div className={styles.bar} id={styles.bar9}></div>
    </div>
  );
}
export default Wave;
