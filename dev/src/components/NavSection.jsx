import React from 'react'
import { conditionalClasses, hyphenat } from '../utils'
import { pages } from '../lib/pagelist'

export default function NavSection({ currentSection }) {
  return (
    <aside
      style={{ width: '400px' }}
      className="h-vh-100 overflow-y-scroll bg-black-40 border-right"
    >
      <div className="d-flex flex-wrap p-md gap-md">
        {pages.map(({ title }) => (
          <a
            href={`#${hyphenat(title)}`}
            style={{ height: '55px' }}
            className={`w-100 border ${conditionalClasses([
              currentSection.title === title,
              'border-orange border-3'
            ])} flex-center special-links link--clear`}
          >
            {title}
          </a>
        ))}
      </div>
    </aside>
  )
}
