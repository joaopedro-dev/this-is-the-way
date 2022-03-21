import styles from "../../styles/components/foot.module.css";

function Foot() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/joaopedro-dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by baby god
      </a>
    </footer>
  );
}

export default Foot