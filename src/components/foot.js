import styles from "../../styles/components/foot.module.css";
  
function Foot() {
  return (
    <footer className={styles.footer}>
        <p>COPYRIGHT<a
          href="https://github.com/joaopedro-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
        @DevOrder 2022
        </a>, All rights Reserved</p>    
    </footer>
  );
}

export default Foot;
