import styles from "../../styles/components/dash-journey.module.css";
import Image from "next/image";
import Link from "next/link";

function DashJourney() {
  return (
    <div className={styles.dashboard}>
      <div>
        <h2>The Journey &rarr;</h2>
        <p>
            Follow the way to find out the Developer inside you, and feel the force, belive in the power of tecnology and your own solutions.
        </p>
        <div className={styles.grid}>
          <Link href="">
            <a className={styles.card}>
              <Image src="/babysound.png" alt="Logo" width={100} height={100} />
              <h3>Devwan</h3>
              <p>Beginner Level</p>
            </a>
          </Link>
          <Link href="">
            <a className={styles.card}>
              <Image src="/monkey.png" alt="Logo" width={100} height={100} />
              <h3>Dev Knight</h3>
              <p>Intermediate Level</p>
            </a>
          </Link>
          <Link href="">
            <a className={styles.card}>
              <Image src="/astronaut-1.png" alt="Logo" width={100} height={100} />
              <h3>Dev Master</h3>
              <p>Advanced Level</p>
            </a>
          </Link>
          <Link href="">
            <a className={styles.card}>
              <Image src="/krishna.png" width={100} height={100} />
              <h3>Grand Master</h3>
              <p>God Level</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashJourney;
