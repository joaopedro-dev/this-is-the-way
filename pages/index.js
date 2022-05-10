import styles from '../styles/Home.module.css'
import Page from './../src/components/Page'
import Header from '../src/components/header'
import Dash from '../src/components/dash'
import Foot from '../src/components/foot'
import Nav from '../src/components/nav'

export default function Home() {
  return (
    <Page title="DevJourney | Home" description="Home" className={styles.container}>
      <Nav/>
      <main className={styles.main}>
        <Header/>
        <Dash/>
      </main> 
      <Foot/>
    </Page>
  )
}