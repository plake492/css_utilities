import React from 'react'
import { conditionalClasses, hyphenat } from '../utils'

export default function RightBar({ currentSection }) {
  return (
    <aside
      className={`h-vh-100 overflow-scroll bg-black-40 border-left position-relative`}
      style={{ width: '200px' }}
    >
      <div className={`d-flex flex-col gap-row-md p-md`}>
        {!!currentSection?.subSections
          ? currentSection.subSections.map(({ title }) => (
              <a
                href={`#${hyphenat(title)}`}
                style={{ height: '120px' }}
                className={`text-sm mb-none w-100 border flex-center special-links link--clear text-center px-md`}
              >
                {title}
              </a>
            ))
          : null}
      </div>
    </aside>
  )
}
