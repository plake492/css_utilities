import React, { useState, useRef } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SectionContainer from './components/SectionContainer'

import { pages } from './lib/pagelist'
import { useResizeObserver } from './hooks/useResizeObserver'

export default function App() {
  const [currentSection, setCurrentSection] = useState({})

  const headerRef = useRef()
  console.log(headerRef)
  const { height: headerHeight } = useResizeObserver(headerRef, ['padding'])
  console.log(headerHeight)

  return (
    <main className="bg-primary h-min-vh-100">
      <Header reference={headerRef} currentSection={currentSection} />
      <main style={{ paddingTop: `${headerHeight}px` }}>
        {pages.map(({ Component, ...rest }, i) => (
          <SectionContainer
            key={i}
            setCurrentSection={setCurrentSection}
            {...rest}
          >
            <Component />
          </SectionContainer>
        ))}
      </main>
      <Footer />
    </main>
  )
}
