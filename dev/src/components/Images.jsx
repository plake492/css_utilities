import React from 'react'

// import v1 from '../assets/hide/v1.jpeg'
// import v2 from '../assets/hide/v2.jpeg'
// import v3 from '../assets/hide/v3.jpeg'
// import v4 from '../assets/hide/v4.jpeg'
// import v5 from '../assets/hide/v5.jpeg'
// import v6 from '../assets/hide/v6.jpeg'
// import v7 from '../assets/hide/v7.jpeg'
// import v8 from '../assets/hide/v8.jpeg'
// import v9 from '../assets/hide/v9.jpeg'
// import v10 from '../assets/hide/v10.jpeg'
// import v11 from '../assets/hide/v11.jpeg'
// import v12 from '../assets/hide/v12.jpeg'

import i1 from '../assets/images/1.jpg'
import i2 from '../assets/images/2.jpg'
import i3 from '../assets/images/3.jpg'
import i4 from '../assets/images/4.jpg'
import i5 from '../assets/images/5.jpg'
import i6 from '../assets/images/6.jpg'
import i7 from '../assets/images/7.jpg'
import i8 from '../assets/images/8.jpg'
import i9 from '../assets/images/9.jpg'
import i10 from '../assets/images/10.jpg'

export default function Images() {
  // const imagesAlt = [
  //   { src: v1, ratio: 'aspect-ratio-3-4' },
  //   { src: v2, ratio: 'aspect-ratio-3-4' },
  //   { src: v3, ratio: 'aspect-ratio-1-1' },
  //   { src: v4, ratio: 'aspect-ratio-1-1' },
  //   { src: v5, ratio: 'aspect-ratio-4-3' },
  //   { src: v6, ratio: 'aspect-ratio-4-3' },
  //   { src: v7, ratio: 'aspect-ratio-3-2' },
  //   { src: v8, ratio: 'aspect-ratio-3-2' },
  //   {
  //     src: v9,
  //     ratio: 'aspect-ratio-16-9',
  //     objectPosition: 'object-position-bl'
  //   },
  //   { src: v10, ratio: 'aspect-ratio-16-9' },
  //   { src: v11, ratio: 'aspect-ratio-3-4' },
  //   { src: v12, ratio: 'aspect-ratio-3-4' }
  // ]

  const images = [
    {
      src: i1,
      ratio: 'aspect-ratio-3-4',
      objectPosition: 'object-position-tr',
      link: '3-/-4'
    },
    {
      src: i2,
      ratio: 'aspect-ratio-3-4',
      objectPosition: 'object-position-tr'
    },
    {
      src: i3,
      ratio: 'aspect-ratio-1-1',
      objectPosition: 'object-position-tr',
      link: '1-/-1'
    },
    {
      src: i4,
      ratio: 'aspect-ratio-1-1',
      objectPosition: 'object-position-tr'
    },
    {
      src: i5,
      ratio: 'aspect-ratio-4-3',
      objectPosition: 'object-position-tr',
      link: '4-/-3'
    },
    {
      src: i6,
      ratio: 'aspect-ratio-4-3',
      objectPosition: 'object-position-tr'
    },
    {
      src: i9,
      ratio: 'aspect-ratio-3-2',
      objectPosition: 'object-position-center',
      link: '3-/-2'
    },
    {
      src: i10,
      ratio: 'aspect-ratio-3-2',
      objectPosition: 'object-position-br'
    },
    {
      src: i7,
      ratio: 'aspect-ratio-16-9',
      objectPosition: 'object-position-tr',
      link: '16-/-9'
    },
    {
      src: i8,
      ratio: 'aspect-ratio-16-9',
      objectPosition: 'object-position-tr'
    }
  ]

  return (
    <div className="row g-sm g-md-xl g-lg-xxl mb-xl">
      {images.map((img, index) => (
        <div id={img.link} className="col-6" key={index}>
          <p className="text-sm text-center">{img.ratio}</p>
          <div
            className={`img-wrapper ${img.ratio} border-pill overflow-hidden border border-blue border-2`}
          >
            <img className={`${img.objectPosition} img `} src={img.src}></img>
          </div>
        </div>
      ))}
    </div>
  )
}
