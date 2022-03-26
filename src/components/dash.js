import styles from "../../styles/components/dash.module.css";
import Image from "next/image";

function Dash() {
  return (
    <div className={styles.dashboard}>
      <div>
        <h2>This is the Way &rarr;</h2>
        <p>
          Find out the power inside you, in this journey you need to battle with dark side inside you and inside all the internet
        </p>
        <div />
        <div className={styles.grid}>
          <a className={styles.card}>
            <Image src="/book_2.png" alt="Logo" width={80} height={80} />
            <h3>The Manifesto</h3>
            <p>Here are our perspective of life mening when we are talking about tecnology.</p>
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
