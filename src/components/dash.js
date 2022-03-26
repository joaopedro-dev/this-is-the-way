import styles from "../../styles/components/dash.module.css";
import Image from "next/image";

function Dash() {
  return (
    <div className={styles.dashboard}>
      <div>
        <h2>This is the Way &rarr;</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          lacinia lectus a dictum blandit. Duis ac erat aliquet, semper tellus
          quis, efficitur dui. Sed porttitor nisi non mauris maximus porttitor.
          Proin iaculis mollis nulla imperdiet sollicitudin. Fusce ut placerat
          augue, id finibus lorem. Pellentesque feugiat suscipit arcu, a egestas
          massa volutpat ac.
        </p>
        <div />
        <div className={styles.grid}>
          <a className={styles.card}>
            <Image src="/star_wars2.png" alt="Logo" width={100} height={100} />
            <h3>The Manifesto</h3>
            <p>Find out and bring some emotions to your project.</p>
          </a>
          <a className={styles.card}>
            <Image src="/star_wars.png" alt="Logo" width={100} height={100} />
            <h3>The Journey</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dash;
