import React from 'react'
import { getCssVar } from '../utils'

export default function BackgroundColors() {
  const colors = getCssVar('--bg')

  return (
    <div className="row g-md">
      {colors.map((v, index) => {
        const bgClass = v.split('--')[1]

        return v !== '--bg-color' ? (
          <div
            className={`${bgClass} border px-md py-sm col-6 col-md-4`}
            key={v + index}
          >
            {bgClass}
          </div>
        ) : null
      })}
    </div>
  )
}
