import styles from '../../styles/components/header.module.css'

function Header(){
    return (
        <div>
        <h1 className={styles.title}>
          The Developer Journey <img className={styles.logo} src="crystal.png"></img>
        </h1>
        <code className={styles.code}/>
        </div>
    )
}

export default Header