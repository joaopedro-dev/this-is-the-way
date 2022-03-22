import styles from "../../styles/components/dash.module.css";

function Dash() {
  return (
    <div className={styles.dashboard}>
      <div>
      <h2>This is the Way</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        lacinia lectus a dictum blandit. Duis ac erat aliquet, semper tellus
        quis, efficitur dui. Sed porttitor nisi non mauris maximus porttitor.
        Proin iaculis mollis nulla imperdiet sollicitudin. Fusce ut placerat
        augue, id finibus lorem. Pellentesque feugiat suscipit arcu, a egestas
        massa volutpat ac. In eleifend neque lorem, commodo molestie arcu
        interdum eget. Proin vitae elit vitae ligula viverra accumsan porta nec
        nisi. Duis sed posuere sapien.
      </p>
      <div/>
      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>Dev Order 🖺</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>Code Radio 📻</h3>
          <p>
            Find out your inner peace and bring some emotions to your project.
          </p>
        </a>
      </div>
    </div>
  </div>
  );
}

export default Dash;
