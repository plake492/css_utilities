import React from 'react'

export default function Borders() {
  const borders = [
    'border',
    'border-top',
    'border-right',
    'border-bottom',
    'border-left'
  ]
  return (
    <>
      <div className="d-flex justify-content-start gap-xl mb-xl">
        {borders.map((border, i) => (
          <div
            key={i}
            style={{ width: '100px', height: '100px' }}
            className={`bg-grey ${border}`}
          ></div>
        ))}
      </div>
      <div className="d-flex justify-content-start gap-xl">
        {borders.map((border, i) => (
          <div
            key={i}
            style={{ width: '100px', height: '100px' }}
            className={`bg-grey ${border} border-dark`}
          ></div>
        ))}
      </div>
    </>
  )
}
