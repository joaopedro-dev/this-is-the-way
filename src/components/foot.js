import styles from "../../styles/components/foot.module.css";
import Image from "next/image";

function Foot() {
  return (
    <footer className={styles.footer}>
      <div className={styles.foot_head}>
        <h3>DevOrder</h3>
      </div>
      <div className={styles.foot_icons}>
        <a
          href="https://github.com/joaopedro-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/GitHub.png" alt="Logo" width={45} height={45} />
        </a>
        <a
          href="https://github.com/joaopedro-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Image src="/linkedin.png" alt="Logo" width={42} height={42} />
        </a>
      </div>      
    </footer>
  );
}

export default Foot;
