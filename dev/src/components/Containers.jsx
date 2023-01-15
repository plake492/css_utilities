import React from 'react'

export default function Containers() {
  const containers = [
    'container',
    'container-sm',
    'container-md',
    'container-lg',
    'container-xl',
    'container-xxl',
    'container-fluid'
  ]
  return (
    <div>
      {containers.map((container, index) => (
        <div
          key={container + index}
          className={`bg-blue-70 py-md mb-xl border-rounded ${container}`}
        >
          <p>{container}</p>
        </div>
      ))}
      <div
        className={`bg-blue-70 mb-xl container border-rounded d-flex flex-col justify-content-end`}
      >
        <p>Container</p>
        <div className={`bg-blue-10 escape-container p-md border-rounded`}>
          <p>Escape</p>
        </div>
        <div
          className={`bg-purple-20 escape-container-padding p-md border-rounded `}
        >
          <p>Escaping only the parent container padding</p>
        </div>
      </div>
    </div>
  )
}
