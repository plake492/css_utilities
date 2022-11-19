import { useEffect, useState, useCallback } from 'react'

const checkAllowedStyles = test => {
  const allowedStyles = ['padding', 'margin', 'border']
  return allowedStyles.includes(test)
}

/**
 * @param el The element being observed
 * @returns SpacingMap
 */
const getSpacing = (el, style = 'padding') => {
  // Catch errors | only allow a specific set of styles
  if (!el || !checkAllowedStyles(style)) return

  const styles = getComputedStyle(el)

  const spacingList = [
    { left: styles[`${style}Left`] },
    { right: styles[`${style}Right`] },
    { top: styles[`${style}Top`] },
    { bottom: styles[`${style}Bottom`] }
  ]

  return spacingList.reduce((acc, cur) => {
    const [key] = Object.keys(cur)
    const propFormatted = parseFloat(cur[key].replace('px', ''))

    if (key === 'left' || key === 'right')
      acc.widthSpacing = acc.widthSpacing + propFormatted || propFormatted

    if (key === 'top' || key === 'bottom')
      acc.heightSpacing = acc.heightSpacing + propFormatted || propFormatted

    return acc
  }, {})
}

export const useResizeObserver = (ref, withSpacing, callback) => {
  const [width, setWidth] = useState(undefined)
  const [height, setHeight] = useState(undefined)

  const handleResize = useCallback(
    entries => {
      if (!Array.isArray(entries)) return

      const { contentRect, target } = entries[0]

      // TODO @debug withSpacing. It's breaking this hook
      if (withSpacing) {
        if (Array.isArray(withSpacing)) {
          const { x, y } = withSpacing.reduce((acc, cur) => {
            const { widthSpacing, heightSpacing } = getSpacing(target, cur)
            acc.x = acc.x + widthSpacing || widthSpacing
            acc.y = acc.y + heightSpacing || heightSpacing
            return acc
          }, {})

          setWidth(contentRect.width + x)
          setHeight(contentRect.height + y)
        } else {
          const { widthSpacing, heightSpacing } = getSpacing(
            target,
            withSpacing
          )
          setWidth(contentRect.width + widthSpacing)
          setHeight(contentRect.height + heightSpacing)
        }
      } else {
        setWidth(contentRect.width)
        setHeight(contentRect.height)
      }

      if (callback) callback(contentRect)
    },
    [callback, withSpacing, ref]
  )

  useEffect(() => {
    if (!ref.current) return

    let RO = new ResizeObserver(entries => handleResize(entries))
    RO.observe(ref.current)

    return () => {
      RO.disconnect()
      RO = null
    }
  }, [ref, handleResize])

  return { width, height }
}
