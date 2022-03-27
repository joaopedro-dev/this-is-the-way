import styles from "../../styles/components/foot.module.css";
import Image from "next/image";

function Foot() {
  return (
    <footer className={styles.footer}>
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
        <Image src="/spotify_4.png" alt="Logo" width={50} height={50} />
      </a>
    </footer>
  );
}

export default Foot;
