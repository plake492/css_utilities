import React, { useRef, useLayoutEffect, useState } from 'react'

// import vid1 from '../assets/hide/vid1.mov'
// import vid2 from '../assets/hide/vid2.mov'
// import vid3 from '../assets/hide/vid3.mov'
// import vid4 from '../assets/hide/vid4.mov'

import Fog from '../assets/videos/fog.mp4'
import Jellyfish from '../assets/videos/Jellyfish.mp4'
import Ocean from '../assets/videos/Ocean.mp4'
import Sunset from '../assets/videos/Sunset.mp4'

import { conditionalClasses } from '../utils'

export default function Videos() {
  const vids = [
    { src: Fog, ratio: 'ratio-16x9' },
    { src: Jellyfish, ratio: 'ratio-16x9' },
    { src: Ocean, ratio: 'ratio-1x1' },
    { src: Sunset, ratio: 'ratio-1x1' }
  ]

  // const vidsAlt = [
  //   { src: vid1, ratio: 'ratio-16x9' },
  //   { src: vid4, ratio: 'ratio-16x9' },
  //   { src: vid2, ratio: 'ratio-1x1' },
  //   { src: vid3, ratio: 'ratio-1x1' }
  // ]

  return (
    <div className="row g-md">
      {vids.map((vid, index) => (
        <div key={index} className="col-12 col-md-6">
          <Video vid={vid} i={index} />
        </div>
      ))}
    </div>
  )
}

function Video({ vid, i }) {
  const videoRef = useRef()
  const wrapperRef = useRef()

  const [negativeMargin, setNegativeMargin] = useState(0)
  const [holdPlayState, setHoldPlayState] = useState(false)

  useLayoutEffect(() => {
    if (videoRef.current && wrapperRef.current) {
      const videoRect = videoRef.current.getBoundingClientRect()
      const wrapperRect = wrapperRef.current.getBoundingClientRect()
      console.log(i, 'video', videoRect)
      console.log(i, 'wrapper', wrapperRect)
    }
  }, [videoRef, wrapperRef])

  const hoverEvents = {
    onMouseEnter: () => {
      if (!holdPlayState) {
        videoRef.current.play()
      }
    },
    onMouseLeave: () => {
      if (!holdPlayState) {
        videoRef.current.pause()
      }
    },
    onClick: () => {
      setHoldPlayState(prev => !prev)
    }
  }

  return (
    <div
      dataI={i}
      ref={wrapperRef}
      className={`${vid.ratio} ${conditionalClasses([
        holdPlayState,
        'border-violet',
        'border-red'
      ])} border-pill overflow-hidden border border-3`}
    >
      <video
        style={{
          ...(vid?.offset ? { marginTop: vid.offset + 'px' } : {}),
          objectFit: 'cover'
        }}
        width="100%"
        height="100%"
        muted
        loop
        ref={videoRef}
        {...hoverEvents}
      >
        <source src={vid.src} type="video/mp4" />
      </video>
    </div>
  )
}
