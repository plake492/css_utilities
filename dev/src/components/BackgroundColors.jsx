import React, { useState } from 'react'
import { getCssVar } from '../utils'

export default function BackgroundColors() {
  const colors = getCssVar('--bg')

  return (
    <div className="row g-sm">
      {colors.map((v, index) => {
        const bgClass = v.split('--')[1]

        return v !== '--bg-color' ? <ColorBlock bgClass={bgClass} /> : null
      })}
    </div>
  )
}

const ColorBlock = ({ bgClass }) => {
  const [showClass, setShowClass] = useState(false)

  return (
    <div
      className={`${bgClass} border border-rounded px-md py-sm col-6 col-md-4`}
    >
      {bgClass}
    </div>
  )
}
