import { Footer } from './components/layout/Footer.jsx'
import { Header } from './components/layout/Header.jsx'
import { Navbar } from './components/layout/Navbar.jsx'

import './globals.css'

export const metadata = {
  title: 'Ampa Fernando Magallanes',
  description: 'Ampa del Ceip Santa Teresa, Marbella',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className='mainLayout'>
        <Header className="hola" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
