import { useRef } from 'react'
import React from 'react'
import Typography from './components/Typography'
import Flex from './components/Flex'
import Header from './components/Header'
import NavSection from './components/NavSection'
import RightBar from './components/RightBar'
import Footer from './components/Footer'
import { useResizeObserver } from './hooks/useResizeObserver'
import Columns from './components/Columns'

export default function App() {
  const headerRef = useRef()
  const footerRef = useRef()

  const { height: headerHeight } = useResizeObserver(headerRef)
  const { height: footerHeight } = useResizeObserver(footerRef)
  console.log(headerHeight)
  return (
    <div className="bg-black-10 h-max-vh-100 overflow-x-hidden">
      <div ref={headerRef}>
        <Header />
      </div>
      <main
        className="d-flex h-vh-100"
        style={{ '--vh-offest': `${headerHeight + footerHeight}px` }}
      >
        <NavSection />
        <section className="h-vh-100 w-100 overflow-scroll">
          <Typography />
          <Flex />
          <Columns />
        </section>
        <RightBar />
      </main>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  )
}
