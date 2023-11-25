import { getCssVar } from '../utils'

export default function BackgroundColors() {
  const colors = [
    'primary',
    'secondary',
    'accent',
    'tertiary',
    'dark',
    'light',
    'black',
    'white',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'cyan',
    'indigo',
    'violet',
    'purple',
    'grey',
  ]
    .flatMap((color) => getCssVar(`--${color}`))
    .filter((v) => !v.includes('font'))

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
      className={`bg-${bgClass} border border-rounded px-md py-xs py-md-sm col-6 col-md-4`}
    >
      bg-{bgClass}
    </div>
  )
}
