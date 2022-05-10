import styles from "../../styles/components/nav.module.css";
import Link from "next/link";
import Image from "next/image";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container_nav}>
        <Link href="/">
          <a>
            <Image src="/space.png" alt="Logo" width={50} height={50} />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Image src="/book_3.png" alt="Logo" width={40} height={40} />
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Nav