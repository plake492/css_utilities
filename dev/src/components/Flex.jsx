import React from 'react'
import FlexBox from './FlexBox'

export default function Flex() {
  const justifyContent = ['start', 'center', 'end', 'between', 'around', 'even']

  return (
    <section
      className="px-md px-lg-xl px-xl-xxl border-bottom bg-black-30"
      id="flex"
    >
      <p className="h1">Flex</p>
      <div className="py-xl">
        <p className="h5">Justify Content (Row)</p>
        {justifyContent.map((val, i) => (
          <FlexBox
            key={val + i}
            className={`justify-content-${val}`}
            boxHeight="50px"
          />
        ))}
      </div>

      <div className="py-xl">
        <p className="h5">Justify Content (Col)</p>
        <div className="d-flex flex-wrap gap-md">
          {justifyContent.map((val, i) => (
            <FlexBox
              key={val + i}
              className={`justify-content-${val}`}
              boxHeight="200px"
              isCol
            />
          ))}
        </div>
      </div>
    </section>
  )
}
