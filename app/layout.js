import { Footer } from './components/layout/Footer/index.jsx'
import { Header } from './components/layout/Header/index.jsx'
import { Navbar } from './components/layout/NavBar/index.jsx'
import './globals.css'

export const metadata = {
  title: 'Ampa Fernando Magallanes',
  description: 'Ampa del Ceip Santa Teresa, Marbella',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className='mainBox'>
        <Header />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
