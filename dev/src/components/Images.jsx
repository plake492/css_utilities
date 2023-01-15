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
  //   { src: v1, ratio: 'ratio-3-4x },
  //   { src: v2, ratio: 'ratio-3-4x },
  //   { src: v3, ratio: 'ratio-1-1x },
  //   { src: v4, ratio: 'ratio-1-1x },
  //   { src: v5, ratio: 'ratio-4-3x },
  //   { src: v6, ratio: 'ratio-4-3x },
  //   { src: v7, ratio: 'ratio-3-2x },
  //   { src: v8, ratio: 'ratio-3-2x },
  //   {
  //     src: v9,
  //     ratio: 'ratio-16x9',
  //     objectPosition: 'object-position-bl'
  //   },
  //   { src: v10, ratio: 'ratio-16-9x },
  //   { src: v11, ratio: 'ratio-3-4x },
  //   { src: v12, ratio: 'ratio-3-x' }
  // ]

  const images = [
    {
      src: i1,
      ratio: 'ratio-3x4',
      objectPosition: 'object-position-tr',
      link: '3-/-4'
    },
    {
      src: i2,
      ratio: 'ratio-3x4',
      objectPosition: 'object-position-tr'
    },
    {
      src: i3,
      ratio: 'ratio-1x1',
      objectPosition: 'object-position-tr',
      link: '1-/-1'
    },
    {
      src: i4,
      ratio: 'ratio-1x1',
      objectPosition: 'object-position-tr'
    },
    {
      src: i5,
      ratio: 'ratio-4x3',
      objectPosition: 'object-position-tr',
      link: '4-/-3'
    },
    {
      src: i6,
      ratio: 'ratio-4x3',
      objectPosition: 'object-position-tr'
    },
    {
      src: i9,
      ratio: 'ratio-3x2',
      objectPosition: 'object-position-center',
      link: '3-/-2'
    },
    {
      src: i10,
      ratio: 'ratio-3x2',
      objectPosition: 'object-position-br'
    },
    {
      src: i7,
      ratio: 'ratio-16x9',
      objectPosition: 'object-position-tr',
      link: '16-/-9'
    },
    {
      src: i8,
      ratio: 'ratio-16x9',
      objectPosition: 'object-position-tr'
    }
  ]

  return (
    <div className="row g-sm g-md-xl g-lg-xxl mb-xl">
      {images.map((img, index) => (
        <div id={img.link} className="col-12 col-md-6" key={index}>
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
