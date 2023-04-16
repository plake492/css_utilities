import React from 'react'
import { conditionalClasses } from '../utils'

function FlexItem({ index, isFullWidth }) {
  return (
    <div
      className={`${conditionalClasses([
        isFullWidth,
        'w-100',
        'w-25',
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
  isCol,
  noFullWith = false,
}) {
  return (
    <div
      className={`my-md ${conditionalClasses([
        isCol,
        'col-12 col-md-6 col-lg-4',
      ])}`}
      id={className}
    >
      <p>{`.${className}`}</p>
      <div
        style={{ height: isCol ? '200px' : '100px' }}
        className={`border border-rounded bg-violet d-flex ${className} ${conditionalClasses(
          [isCol, 'flex-col']
        )}`}
      >
        {[...Array(3)].map((_, index) => (
          <FlexItem
            key={index}
            index={index + 1}
            isFullWidth={isCol && !noFullWith}
          />
        ))}
      </div>
    </div>
  )
}
