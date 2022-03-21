import styles from '../styles/Home.module.css'
import Page from './../src/components/Page'
import Header from '../src/components/header'

export default function Home() {
  return (
    <Page title="Home" description="Teste" className={styles.container}>
      <main className={styles.main}>

      <Header/>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Code Radio &rarr;</h2>
            <p>Find out your inner peace and bring some emotions to your project.</p>
          </a>
        </div>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/joaopedro-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by baby god
        </a>
      </footer>
    </Page>
  )
}
