// import Image from 'next/image'
import { MainNews } from './components/layout/MainNews'

import './globals.css'

export default function Home() {
  return (
    <main className='mainPage'>
      <div className='mainBoxPage'>
        <MainNews />
      </div>
    </main>
  )
}
