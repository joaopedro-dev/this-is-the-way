import styles from '../styles/Home.module.css'
import Page from './../src/components/Page'
import Header from '../src/components/header'
import Dash from '../src/components/dash'

export default function Home() {
  return (
    <Page title="Home" description="Teste" className={styles.container}>
      <main className={styles.main}>

      <Header/>
      <Dash/>
      
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
