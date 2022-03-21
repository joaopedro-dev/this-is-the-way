import styles from "../../styles/components/nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <a className={styles.item_nav}>
        Home
      </a>
      <a className={styles.item_nav}>
        About
      </a>
    </nav>
  );
}

export default Nav