import styles from "./Sky.module.css";

function Sky() {
  let clouds = [];
  for (let i = 0; i < 10; i += 1) {
    clouds.push(i);
  }

  // function xPos() {
  //   const cloudPositions = [20, 100, 60, 20, 120, 40, 200, 60];
  // }

  return (
    <div className={styles.container}>
      {clouds.map((id) => (
        <div
          src="/images/cloud.png"
          key={id}
          id={styles.id}
          className={styles.cloud}
          alt="cloud"
          // style={{ animationDelay: `${(id + 1) * 200}ms` }}
        />
      ))}
    </div>
  );
}
export default Sky;
