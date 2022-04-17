import styles from "./Cure.module.css";

function Cure() {
  let lines = [];
  for (let i = 0; i < 6; i += 1) {
    lines.push(i);
  }

  // can i put the id as an input to my animation???

  return (
    <div className={styles.container}>
      {lines.map((id) => (
        <div key={id} className={styles.cure}></div>
      ))}
    </div>
  );
}
export default Cure;
