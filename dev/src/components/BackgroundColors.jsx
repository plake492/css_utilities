import { getCssVar } from '../utils'

export default function BackgroundColors() {
  const colors = getCssVar('--bg')

  return (
    <div className="row g-sm">
      {colors.map((v) => {
        const bgClass = v.split('--')[1]

        return v !== '--color' ? <ColorBlock key={v} bgClass={bgClass} /> : null
      })}
    </div>
  )
}

const ColorBlock = ({ bgClass }) => {
  return (
    <div
      className={`${bgClass} border border-rounded px-md py-xs py-md-sm col-6 col-md-4`}
    >
      {bgClass}
    </div>
  )
}
