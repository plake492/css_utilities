import React, { forwardRef, useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { conditionalClasses } from '../utils'

const SectionContainer = forwardRef(
  (
    {
      title,
      bgColor,
      children,
      subSections,
      titleType = 'h3',
      setCurrentSection,
      removePadding = false,
      container = 'container'
    },
    ref
  ) => {
    const sectionRef = useRef()

    useEffect(() => {
      if (sectionRef.current) {
        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top-=2px top',
            end: 'bottom-=2px top',
            scrub: true,
            scroller: ref.current,
            onEnter: () => setCurrentSection({ title, subSections }),
            onEnterBack: () => setCurrentSection({ title, subSections })
          }
        })
      }
    }, [])

    return (
      <section
        ref={sectionRef}
        className={`border-bottom overflow-x-hidden py-md ${bgColor}`}
        id={title.replace(/\s+/g, '-').toLowerCase()}
      >
        {!!container ? (
          <div className={container}>
            <p className={titleType}>{title}</p>
            {children}
          </div>
        ) : (
          <>
            <p className={titleType}>{title}</p>
            {children}
          </>
        )}
      </section>
    )
  }
)

export default SectionContainer
