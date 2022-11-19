import React from 'react'
import { conditionalClasses } from '../utils'

function FlexItem({ index, isFullWidth }) {
  return (
    <div
      className={`${conditionalClasses([
        isFullWidth,
        'w-100',
        'w-25'
      ])} flex-center border border-rounded bg-blue-60`}
    >
      {index}
    </div>
  )
}

export default function FlexBox({
  className,
  boxHeight,
  parentWidth = 'w-100',
  itemWidth = 'w-25',
  isCol
}) {
  return (
    <div
      className={`my-md ${conditionalClasses([
        isCol,
        'w-100 w-md-50 w-lg-33'
      ])}`}
      id={className}
    >
      <p>{`.${className}`}</p>
      <div
        style={{ height: boxHeight }}
        className={`py-xs border border-rounded bg-violet d-flex ${className} ${conditionalClasses(
          [isCol, 'flex-col']
        )}`}
      >
        {[...Array(3)].map((_, index) => (
          <FlexItem key="index" index={index + 1} isFullWidth={isCol} />
        ))}
      </div>
    </div>
  )
}
