import React from 'react'

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
  const images = [
    {
      src: i1,
      alt: 'alt text',
      ratio: 'ratio-3x4',
      objectPosition: 'object-position-tr',
      link: '3-/-4',
    },
    {
      src: i2,
      alt: 'alt text',
      ratio: 'ratio-3x4',
      objectPosition: 'object-position-tr',
    },
    {
      src: i3,
      alt: 'alt text',
      ratio: 'ratio-1x1',
      objectPosition: 'object-position-tr',
      link: '1-/-1',
    },
    {
      src: i4,
      alt: 'alt text',
      ratio: 'ratio-1x1',
      objectPosition: 'object-position-tr',
    },
    {
      src: i5,
      alt: 'alt text',
      ratio: 'ratio-4x3',
      objectPosition: 'object-position-tr',
      link: '4-/-3',
    },
    {
      src: i6,
      alt: 'alt text',
      ratio: 'ratio-4x3',
      objectPosition: 'object-position-tr',
    },
    {
      src: i9,
      alt: 'alt text',
      ratio: 'ratio-3x2',
      objectPosition: 'object-position-center',
      link: '3-/-2',
    },
    {
      src: i10,
      alt: 'alt text',
      ratio: 'ratio-3x2',
      objectPosition: 'object-position-br',
    },
    {
      src: i7,
      alt: 'alt text',
      ratio: 'ratio-16x9',
      objectPosition: 'object-position-tr',
      link: '16-/-9',
    },
    {
      src: i8,
      alt: 'alt text',
      ratio: 'ratio-16x9',
      objectPosition: 'object-position-tr',
    },
  ]

  return (
    <div className="row g-sm g-md-xl g-lg-xxl mb-xl">
      {images.map((img, index) => (
        <div id={img.link} className="col-12 col-md-6" key={index}>
          <p className="text-sm text-center">{img.ratio}</p>
          <div
            className={`img-wrapper ${img.ratio} border-pill overflow-hidden border border-blue border-2`}
          >
            <img
              className={`${img.objectPosition} img `}
              alt={img.alt}
              src={img.src}
            ></img>
          </div>
        </div>
      ))}
    </div>
  )
}
