import React from 'react'
import { conditionalClasses, hyphenat } from '../utils'
import { pages } from '../lib/pagelist'

export default function Header({ currentSection }) {
  return (
    <header className="bg-red-30 py-md box-shadow overflow-x-hidden border-bottom">
      <div className="d-flex justify-content-between align-items-center mx-md mx-lg-lg mx-xl-xl mx-xxl-xxl">
        <h1 className="h5 my-none">CSS UTILITIES</h1>
        <nav>
          <ul className="no-list-style mb-none d-flex gap-md">
            {pages.map(({ title }) => (
              <li>
                <a
                  className={`link link--nav ${conditionalClasses([
                    currentSection.title === title,
                    'link--active'
                  ])}`}
                  href={`#${hyphenat(title)}`}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
