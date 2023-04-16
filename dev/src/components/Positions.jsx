import React from 'react'

export default function Positions() {
  const positions = [
    '',
    'top-50 absolute-center-y',
    'bottom-0',
    'left-25 absolute-center-x',
    'top-50 left-25 absolute-center',
    'bottom-0 left-25 absolute-center-x',
    'left-50 absolute-center-x',
    'top-50 left-50 absolute-center',
    'bottom-0 left-50 absolute-center-x',
    'left-75 absolute-center-x',
    'top-50 left-75 absolute-center',
    'bottom-0 left-75 absolute-center-x',
    'right-0',
    'top-50 right-0 absolute-center-y',
    'bottom-0 right-0',
  ]

  return (
    <div>
      <div
        className="bg-white position-relative border-rounded w-100 mb-xl border border-purple border-5"
        style={{ height: '300px' }}
      >
        {positions.map((position, index) => (
          <div
            style={{ height: '50px', width: '50px' }}
            className={`bg-violet border-rounded position-absolute ${position}`}
          ></div>
        ))}
      </div>
    </div>
  )
}
