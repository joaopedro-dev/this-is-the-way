import styles from '../styles/Home.module.css'
import Page from './../src/components/Page'
import Building from '../src/components/building'
import Foot from '../src/components/foot'

export default function Home() {
  return (
    <Page title="DevJourney | Home" description="Home" className={styles.container}>  
      <main className={styles.main}>
        <Building/>
      </main> 
      <Foot/>
    </Page>
  )
}