import styles from "../../styles/components/nav.module.css";
import Link from "next/link";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container_nav}>
        <Link href="/">
          <a className={styles.item_nav}>
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className={styles.item_nav}>
            About
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Nav