import React, { useState } from 'react'
import { conditionalClasses, hyphenat, isEven } from '../utils'
import { pages } from '../lib/pagelist'

export default function Header({ currentSection, reference }) {
  const [showDropdown, setShowdropdown] = useState(false)

  return (
    <header
      ref={reference}
      className="position-fixed w-100 z-1 bg-red-30 box-shadow border-bottom position-relative d-flex justify-content-between align-items-center py-md px-md px-lg-lg px-xl-xl px-xxl-xxl"
    >
      <h1 className="h5 my-none">CSS UTILITIES</h1>
      <div>
        <div
          className="border-top border-bottom flex-center border-2 c-pointer btn--clear border-black"
          style={{ height: '25px', width: '25px' }}
          onClick={() => setShowdropdown(prev => !prev)}
        >
          <div className="border-top border-2 w-100 border-black"></div>
        </div>
      </div>

      <nav
        className={`dropdown dropdown--${conditionalClasses([
          showDropdown,
          'opened opacity-100',
          'closed  opacity-0'
        ])} position-absolute top-100 w-min-100 right-0 bg-black-40 z-n1 border-bottom shadow-4`}
      >
        <DropdownMenu
          currentSection={currentSection}
          setShowdropdown={setShowdropdown}
        />
      </nav>
    </header>
  )
}

function DropdownMenu({ currentSection, setShowdropdown }) {
  return (
    <ul className="no-list-style mb-none d-flex flex-col text-start">
      {pages.map(({ title, subSections }, index) => (
        <li
          key={title + index}
          className={`${conditionalClasses([
            isEven(index),
            `bg-grey-60`
          ])} px-md py-sm`}
        >
          <a
            onClick={() => setShowdropdown(false)}
            className={`link link--nav link--no-underline`}
            href={`#${hyphenat(title)}`}
          >
            {title}
          </a>
          {subSections
            ? subSections.map(({ title }) => (
                <span key={title}>
                  <span className="mx-lg"> | </span>
                  <a
                    className={`link link--nav link--no-underline`}
                    href={`#${hyphenat(title)}`}
                  >
                    {title}
                  </a>
                </span>
              ))
            : null}
        </li>
      ))}
    </ul>
  )
}
