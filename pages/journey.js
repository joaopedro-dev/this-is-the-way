import styles from '../styles/Home.module.css'
import Page from './../src/components/Page'
import Foot from '../src/components/foot'
import Nav from '../src/components/nav'
import Header from '../src/components/header'
import DashJourney from '../src/components/dash_journey'

export default function Home() {
  return (
    <Page title="The Journey" description="Teste" className={styles.container}>   
      <main className={styles.main}>
        <Header/>
        <DashJourney/>
      </main> 
      <Foot/>
    </Page>
  )
}