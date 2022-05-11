import styles from "../../styles/components/dash.module.css";
import Image from "next/image";
import Link from "next/link";

function Dash() {
  return (
    <div className={styles.dashboard}> 
        <div className={styles.grid}>
          <Link href="/manifesto">
            <a className={styles.card}>
              <Image src="/astronaut.png" alt="Logo" width={90} height={90} />
              <h3>Manifesto</h3>
              <p>Here are our purpose and perspective of life</p>
            </a>
          </Link>
          <Link href="/journey">
            <a className={styles.card}>
              <Image src="/planet.png" alt="Logo" width={90} height={90} />
              <h3>The Journey</h3>
              <p>Here you start the journey to change your destiny</p>
            </a>
          </Link>
        </div>
      </div>
  );
}

export default Dash;
