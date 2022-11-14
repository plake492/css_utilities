import React from 'react'

export default function Header() {
  return (
    <header className="bg-red-30 py-md box-shadow overflow-x-hidden border-bottom">
      <div className="d-flex justify-content-between align-items-center mx-xxxl">
        <h1 className="h5 my-none">CSS UTILITIES</h1>
        <nav>
          <ul className="no-list-style mb-none d-flex gap-md">
            <li>
              <a className="link link--nav" href="#typography">
                Typography
              </a>
            </li>
            <li>
              <a className="link link--nav" href="#flex">
                Flex
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
