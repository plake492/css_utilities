import React from 'react'
import Typography from './components/Typography'
import Flex from './components/Flex'
import Header from './components/Header'
import NavSection from './components/NavSection'
import RightBar from './components/RightBar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-black-10 h-max-vh-100 overflow-x-hidden">
      <Header />
      <main className="d-flex h-vh-100" style={{ '--vh-offest': '162px' }}>
        <NavSection />
        <section className="h-vh-100 w-100 overflow-scroll">
          <Typography />
          <Flex />
        </section>
        <RightBar />>
      </main>
      <Footer />
    </div>
  )
}
