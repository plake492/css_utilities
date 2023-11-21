import { useEffect, useRef, useState } from 'react'

export default function Loader() {
  const loaderRef = useRef(null)
  const [lines, setLines] = useState(null)

  useEffect(() => {
    if (loaderRef.current) {
      const lineNumber = getComputedStyle(loaderRef.current).getPropertyValue(
        '--circle-line-loader-number-of-lines'
      )

      setLines(parseInt(lineNumber))
    }
  }, [])

  const rainbowRef = useRef(null)
  const [rainbowLines, setRainbowLines] = useState(null)

  useEffect(() => {
    if (rainbowRef.current) {
      const lineNumber = getComputedStyle(rainbowRef.current).getPropertyValue(
        '--rainbow-loader-number-of-lines'
      )
      console.log('lineNumber ==>', lineNumber)

      setRainbowLines(parseInt(lineNumber))
    }
  }, [])

  const bounceRef = useRef(null)
  const [bounceLines, setBounceLines] = useState(null)

  useEffect(() => {
    if (bounceRef.current) {
      const lineNumber = getComputedStyle(bounceRef.current).getPropertyValue(
        '--bounce-loader-number-of-lines'
      )

      setBounceLines(parseInt(lineNumber))
    }
  }, [])

  return (
    <>
      <div ref={loaderRef} className="circle-line-loader__wrapper">
        {lines
          ? [...Array(lines)].map((_, i) => (
              <div key={i} className={`circle-line-loader__line`}></div>
            ))
          : null}
      </div>

      <div ref={rainbowRef} className="rainbow-loader__wrapper">
        {rainbowLines
          ? [...Array(rainbowLines)].map((_, i) => (
              <div key={i} className={`rainbow-loader__line`}></div>
            ))
          : null}
      </div>

      <div ref={bounceRef} className="bounce-loader__wrapper">
        {bounceLines
          ? [...Array(bounceLines)].map((_, i) => (
              <div key={i} className={`bounce-loader__line`}></div>
            ))
          : null}
      </div>

      <div ref={bounceRef} className="bounce-loader__wrapper">
        {bounceLines
          ? [...Array(bounceLines)].map((_, i) => (
              <div
                key={i}
                className={`bounce-loader__line bounce-loader__line--color alt-bounce`}
              ></div>
            ))
          : null}
      </div>
    </>
  )
}
