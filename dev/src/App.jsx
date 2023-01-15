import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SectionContainer from './components/SectionContainer'
import { pages } from './lib/pagelist'

export default function App() {
  const [currentSection, setCurrentSection] = useState({})

  return (
    <div className="bg-black-10 h-max-vh-100 overflow-x-hidden">
      <Header currentSection={currentSection} />
      <main className="h-vh-100">
        {pages.map(({ Component, ...rest }) => (
          <SectionContainer setCurrentSection={setCurrentSection} {...rest}>
            <Component />
          </SectionContainer>
        ))}
      </main>
      <Footer />
    </div>
  )
}
