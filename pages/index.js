import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Page from './../src/components/Page'

export default function Home() {
  return (
    <Page title="Home" description="Teste" className={styles.container}>
      <main className={styles.main}>

        <h1 className={styles.title}>
          The Developer Journey🔮
        </h1>
        <code className={styles.code}>may the coffe be with you</code>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
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
