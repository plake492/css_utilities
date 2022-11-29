import React from 'react'

export default function Containers() {
  const containers = [
    'container',
    'container-sm',
    'container-md',
    'container-lg',
    'container-xl',
    'container-xxl',
    'container-xxxl'
  ]
  return (
    <div>
      {containers.map((container, index) => (
        <p
          key={container + index}
          className={`bg-blue-70 py-md mb-xl container ${container}`}
        >
          {container}
        </p>
      ))}
    </div>
  )
}
