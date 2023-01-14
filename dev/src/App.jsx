import React, { useRef, useState } from 'react'

import Header from './components/Header'
import NavSection from './components/NavSection'
import RightBar from './components/RightBar'
import Footer from './components/Footer'
import SectionContainer from './components/SectionContainer'

import { pages } from './lib/pagelist'

import { useResizeObserver } from './hooks/useResizeObserver'
import { useMatchMedia } from './hooks/useMatchMedia'
import { breakpoints } from './utils'

export default function App() {
  const headerRef = useRef()
  const footerRef = useRef()
  const mainRef = useRef()

  const [currentSection, setCurrentSection] = useState({})

  // const { height: headerHeight } = useResizeObserver(headerRef)
  // const { height: footerHeight } = useResizeObserver(footerRef)

  const isLargeOrAbove = useMatchMedia(breakpoints.lg)

  return (
    <div className="bg-black-10 h-max-vh-100 overflow-x-hidden">
      <div className="position-relative z-10" ref={headerRef}>
        <Header currentSection={currentSection} />
      </div>
      <main
        className="h-vh-100"
        // style={{ '--vh-offest': `${headerHeight + footerHeight}px` }}
      >
        {/* {isLargeOrAbove ? <NavSection currentSection={currentSection} /> : null} */}
        <section
          ref={mainRef}
          // className="h-vh-100 w-100 overflow-scroll"
          style={{ scrollBehavior: 'smooth' }}
        >
          {pages.map(({ Component, ...rest }) => (
            <SectionContainer
              ref={mainRef}
              setCurrentSection={setCurrentSection}
              {...rest}
            >
              <Component />
            </SectionContainer>
          ))}
        </section>
        {/* {isLargeOrAbove ? <RightBar currentSection={currentSection} /> : null} */}
      </main>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  )
}
