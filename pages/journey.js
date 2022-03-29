import styles from '../styles/Home.module.css'
import Page from './../src/components/Page'
import Foot from '../src/components/foot'
import Nav from '../src/components/nav'
import Building from '../src/components/building'

export default function Home() {
  return (
    <Page title="The Journey" description="Teste" className={styles.container}>   
      <Nav/>
      <main className={styles.main}>
        <Building/>
      </main> 
      <Foot/>
    </Page>
  )
}