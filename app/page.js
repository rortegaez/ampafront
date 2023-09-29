// import Image from 'next/image'
import { MainNews } from './components/layout/MainNews'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainBox}>
        <MainNews />
      </div>
    </main>
  )
}
