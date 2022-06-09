import styles from '../../styles/components/header.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Header(){
    return (
      <div>
        <Link href="/">
          <a className={styles.container_header}>
            <h1 className={styles.title}>
              devJourney 
              <Image src="/infinity.png" alt="Logo" width={100} height={100} />
            </h1>
            <code className={styles.code}>may the coffee be with you</code>
          </a>
        </Link>
      </div>
    )
}

export default Header