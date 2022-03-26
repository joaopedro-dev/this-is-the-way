import styles from "../../styles/components/foot.module.css";
import Image from "next/image";

function Foot() {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/joaopedro-dev"
        target="_blank"
        rel="noopener noreferrer">
      <Image src="/qrcode.png" alt="Logo" width={80} height={80} />
      </a>
    </footer>
  );
}

export default Foot