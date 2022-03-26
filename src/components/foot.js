import styles from "../../styles/components/foot.module.css";
import Image from "next/image";

function Foot() {
  return (
    <footer className={styles.footer}>
      <iframe
        src="https://open.spotify.com/embed/playlist/6xA9RZ19qAhaeyYeQQNY5v?utm_source=generator&theme=0"
        width="40%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
      <a
        href="https://github.com/joaopedro-dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/GitHub.png" alt="Logo" width={60} height={60} />
      </a>
    </footer>
  );
}

export default Foot;
