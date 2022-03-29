import styles from "../../styles/components/dash.module.css";
import Image from "next/image";
import Link from "next/link";

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
          <Link href="/manifesto">
            <a className={styles.card}>
              <Image src="/book_3.png" alt="Logo" width={90} height={90} />
              <h3>The Manifesto</h3>
              <p>Here are our purpose and perspective of life</p>
            </a>
          </Link>
          <Link href="/journey">
            <a className={styles.card}>
              <Image src="/planet.png" alt="Logo" width={90} height={90} />
              <h3>The Journey</h3>
              <p>Here you will start the journey to change your destiny</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dash;
