import styles from '../styles/Home.module.css'
import Page from './../src/components/Page'
import Foot from '../src/components/foot'
import Nav from '../src/components/nav'
import Header from '../src/components/header'
import Manifesto_card from '../src/components/manifesto_card'

export default function Home() {
  return (
    <Page title="Manifesto" description="Teste" className={styles.container}>   
      <main className={styles.main}>
        <Header/>
        <Manifesto_card/>
      </main> 
      <Foot/>
    </Page>
  )
}