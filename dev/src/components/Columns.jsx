import React from 'react'
import { conditionalClasses } from '../utils'

export default function Columns() {
  return (
    <>
      <div className="row g-md py-xxl">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="col-6 col-md-3 p-md bg-accent-10 border-rounded border border-dark"
          >
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              consequuntur fuga animi, illum assumenda accusantium natus
              corporis minus sapiente fugit itaque quod reiciendis laboriosam
              placeat dolores. Aliquid delectus cupiditate necessitatibus.
            </p>
          </div>
        ))}
      </div>
      <div className="row py-xxl g-lg">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="col-12 col-md-6 p-md bg-accent-10 border-rounded border border-dark"
          >
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              consequuntur fuga animi, illum assumenda accusantium natus
              corporis minus sapiente fugit itaque quod reiciendis laboriosam
              placeat dolores. Aliquid delectus cupiditate necessitatibus.
            </p>
          </div>
        ))}
      </div>
      <div className="row py-xxl g-xl">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`col-4 ${conditionalClasses([
              i % 2 === 0,
              'col-xl-9',
              'col-xl-3'
            ])} p-md bg-accent-10 border-rounded border border-dark overflow-x-scroll`}
          >
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              consequuntur fuga animi, illum assumenda accusantium natus
              corporis minus sapiente fugit itaque quod reiciendis laboriosam
              placeat dolores. Aliquid delectus cupiditate necessitatibus.
            </p>
          </div>
        ))}
      </div>
      <div className="row py-xxl">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="col-3 p-md bg-accent-10 border-rounded border border-dark"
          >
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              consequuntur fuga animi, illum assumenda accusantium natus
              corporis minus sapiente fugit itaque quod reiciendis laboriosam
              placeat dolores. Aliquid delectus cupiditate necessitatibus.
            </p>
          </div>
        ))}
      </div>
      <div className="row py-xxl g-row-md g-col-xl">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="col-4 col-md-2 p-md bg-accent-10 border-rounded border border-dark"
          >
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              consequuntur fuga animi, illum assumenda accusantium natus
              corporis
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
