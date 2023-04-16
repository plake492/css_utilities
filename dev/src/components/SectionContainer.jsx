import React, { forwardRef, useRef } from 'react'
import { conditionalClasses } from '../utils'

const SectionContainer = forwardRef(
  (
    {
      title,
      children,
      subSections,
      setCurrentSection,
      titleType = 'h3',
      bgColor = 'bg-priamry',
      removePadding = false,
      container = 'container',
    },
    ref
  ) => {
    const sectionRef = useRef()

    return (
      <section
        ref={sectionRef}
        className={`border-bottom py-xl ${bgColor}`}
        id={title.replace(/\s+/g, '-').toLowerCase()}
      >
        {!!container ? (
          <div className={container}>
            {title ? <p className={titleType}>{title}</p> : null}
            {children}
          </div>
        ) : (
          <>
            <div className={'container'}>
              {title ? <p className={titleType}>{title}</p> : null}
            </div>
            {children}
          </>
        )}
      </section>
    )
  }
)

export default SectionContainer
