import React from 'react'
import FlexBox from './FlexBox'
import SectionContainer from './SectionContainer'

export default function Flex() {
  const justifyContent = ['start', 'center', 'end', 'between', 'around', 'even']
  const alignItmes = ['start', 'center', 'end', 'baseline', 'sretch']

  return (
    <>
      <div id="justify" className="py-xl">
        <p className="h5">Justify Content (Row)</p>
        {justifyContent.map((val, i) => (
          <FlexBox
            key={val + i}
            className={`justify-content-${val}`}
            boxHeight={50}
          />
        ))}
      </div>

      <div id="justify-(col)" className="py-xl">
        <p className="h5">Justify Content (Col)</p>
        <div className="row g-lg-xl g-md">
          {justifyContent.map((val, i) => (
            <FlexBox
              key={val + i}
              className={`justify-content-${val}`}
              boxHeight={200}
              isCol
            />
          ))}
        </div>
      </div>

      <div id="align-items" className="py-xl">
        <p className="h5">Align items</p>
        {alignItmes.map((val, i) => (
          <FlexBox
            key={val + i}
            className={`align-items-${val}`}
            boxHeight={100}
            expandFirstItem
          />
        ))}
      </div>
    </>
  )
}
