import React from 'react'
import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'
import img4 from '../assets/images/4.jpg'
import img5 from '../assets/images/5.jpg'
import img6 from '../assets/images/6.jpg'

export default function Cards() {
  return (
    <div className="row g-md g-lg-lg g-xl-xl py-xl">
      <div className="col-12">
        <Card img={<img src={img6} />} />
      </div>
      <div className="col-12 col-md-6">
        <Card img={<img src={img1} />} />
      </div>
      <div className="col-12 col-md-6">
        <Card img={<img src={img2} />} />
      </div>
      <div className="col-6 col-md-4">
        <Card img={<img src={img3} />} />
      </div>
      <div className="col-6 col-md-4">
        <Card img={<img src={img4} />} />
      </div>
      <div className="col-6 col-md-4">
        <Card img={<img src={img5} />} />
      </div>
    </div>
  )
}

function Card({ img }) {
  return (
    <div className="border-rounded bg-black-60 shadow-4">
      <div className="p-md px-md-xl py-md-md">
        <p className="h5 mb-none">Header</p>
      </div>
      <div className="img-wrapper aspect-ratio-16-9">{img}</div>
      <div className="p-md p-md-xl">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
          repudiandae iusto officiis earum aut, minima cumque consequuntur iste
          fugiat suscipit non praesentium voluptate, qui nobis ullam tempora
          adipisci ut temporibus!
        </p>
      </div>
    </div>
  )
}
