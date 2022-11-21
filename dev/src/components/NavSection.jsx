import React from 'react'
import { hyphenat } from '../utils'
import { pages } from '../lib/pagelist'

export default function NavSection() {
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
            className="w-100 border flex-center special-links link--clear"
          >
            {title}
          </a>
        ))}
      </div>
    </aside>
  )
}
