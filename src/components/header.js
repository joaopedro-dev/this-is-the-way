import styles from '../../styles/components/header.module.css'

function Header(){
    return (
      <div>
        <div className={styles.container_header}>
          <h1 className={styles.title}>
            The Developer Journey <img className={styles.logo} src="crystal.png"/>
          </h1>
          <code className={styles.code}>Thayna gostosa</code>
        </div>
      </div>
    )
}

export default Header