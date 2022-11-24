import React from 'react'

export default function BoxShadows() {
  const shadows = [
    'shadow-0',
    'shadow-1',
    'shadow-2',
    'shadow-3',
    'shadow-4',
    'shadow-5'
  ]
  const shadowsInset = [
    'shadow-inset-0',
    'shadow-inset-1',
    'shadow-inset-2',
    'shadow-inset-3',
    'shadow-inset-4',
    'shadow-inset-5'
  ]
  const shadowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']

  return (
    <>
      <section className="d-flex flex-wrap gap-xl mb-xl">
        {shadows.map((shadow, index) => (
          <div
            key={shadow + index}
            className={`${shadow} bg-grey-60 shadow-grey border-pill`}
            style={{ height: '150px', width: '150px' }}
          ></div>
        ))}
      </section>
      <section className="d-flex flex-wrap gap-xl mb-xl">
        {shadowColors.map((color, index) => (
          <div
            key={color + index}
            className={`shadow-5 shadow-${color} bg-${color}-50 border-pill`}
            style={{ height: '150px', width: '150px' }}
          ></div>
        ))}
      </section>
      <section className="d-flex flex-wrap gap-xl">
        {shadowsInset.map((shadow, index) => (
          <div
            key={shadow + index}
            className={`${shadow} bg-white border-pill`}
            style={{ height: '150px', width: '150px' }}
          ></div>
        ))}
      </section>
    </>
  )
}
