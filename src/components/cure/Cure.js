import styles from "./Cure.module.css";

function Cure() {
  let lines = [];
  for (let i = 0; i < 50; i += 1) {
    lines.push(i);
  }

  // can i put the id as an input to my animation???
  // STYLES !! thanks alex

  return (
    <div className={styles.container}>
      {lines.map((id) => (
        <div
          key={id}
          className={styles.cure}
          style={{ animationDelay: `${id * 200}ms` }}
        />
      ))}
    </div>
  );
}
export default Cure;
