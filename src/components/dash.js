import styles from '../../styles/components/dash.module.css'

function Dash() {
  return (
    <div className={styles.grid}>

      <a href="https://nextjs.org/docs" className={styles.card}>
        <h2>Documentation &rarr;</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>

      <a href="https://nextjs.org/docs" className={styles.card}>
        <h2>Code Radio &rarr;</h2>
        <p>
          Find out your inner peace and bring some emotions to your project.
        </p>
      </a>

    </div>
  );
}

export default Dash