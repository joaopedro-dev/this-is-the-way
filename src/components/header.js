import styles from '../../styles/components/header.module.css'
import Image from 'next/image'

function Header(){
    return (
      <div>
        <div className={styles.container_header}>
          <h1 className={styles.title}>
            The Developer Journey 
            <Image src="/crystal.png" alt="Logo" width={80} height={80} />
          </h1>
          <code className={styles.code}>may the coffee be with you</code>
        </div>
      </div>
    )
}

export default Header