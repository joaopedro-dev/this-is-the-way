import styles from '../../styles/components/header.module.css'
import Image from 'next/image'

function Header(){
    return (
      <div>
        <div className={styles.container_header}>
          <h1 className={styles.title}>
            The Developer Journey 
            <Image src="/crystal_3.png" alt="Logo" width={85} height={85} />
          </h1>
          <code className={styles.code}>may the coffee be with you</code>
        </div>
      </div>
    )
}

export default Header