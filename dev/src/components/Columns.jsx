import React from 'react'
import { conditionalClasses } from '../utils'
import CodeSnippet from './CodeSnippet'

function Box({ col }) {
  return (
    <div
      style={{ height: '100px' }}
      className={`${col} p-md bg-accent-10 border-rounded border border-dark flex-center`}
    >
      <p className="text-xs">{col}</p>
    </div>
  )
}

export default function Columns() {
  const snipOne = [
    {
      classList: 'row g-md',
      children: [...Array(4)].map(() => ({
        classList: 'col-6 col-md-3 p-md bg-accent-10 border-rounded',
      })),
    },
  ]
  const snipTwo = [
    {
      classList: 'row g-md',
      children: [...Array(3)].map(() => ({
        classList: 'col-6 col-md-4 p-md bg-accent-10 border-rounded',
      })),
    },
  ]
  const snipThree = [
    {
      classList: 'row g-md',
      children: [...Array(2)].map(() => ({
        classList: 'col-12 col-md-6 p-md bg-accent-10 border-rounded',
      })),
    },
  ]
  const snipFour = [
    {
      classList: 'row g-md',
      children: [...Array(4)].map((_, i) => ({
        classList: `col-12 ${conditionalClasses([
          i === 0 || i === 3,
          'col-md-8',
          'col-md-4',
        ])} p-md bg-accent-10 border-rounded`,
      })),
    },
  ]
  return (
    <>
      <div className="mb-xl">
        <CodeSnippet code={snipOne}>
          <div className="row g-md">
            {[...Array(4)].map((_, i) => (
              <Box key={i} col={'col-6 col-md-3'} />
            ))}
          </div>
        </CodeSnippet>
      </div>
      <div className="mb-xl">
        <CodeSnippet code={snipTwo}>
          <div className="row g-md">
            {[...Array(3)].map((_, i) => (
              <Box key={i} col={'col-6 col-md-4'} />
            ))}
          </div>
        </CodeSnippet>
      </div>
      <div className="mb-xl">
        <CodeSnippet code={snipThree}>
          <div className="row g-md">
            {[...Array(2)].map((_, i) => (
              <Box key={i} col={'col-12 col-md-6'} />
            ))}
          </div>
        </CodeSnippet>
      </div>
      <div className="mb-xl">
        <CodeSnippet code={snipFour}>
          <div className="row g-md">
            {[...Array(4)].map((_, i) => (
              <Box
                key={i}
                col={conditionalClasses([
                  i === 0 || i === 3,
                  'col-md-8',
                  'col-md-4',
                ])}
              />
            ))}
          </div>
        </CodeSnippet>
      </div>
      <div className="row ">
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
      <div className="row py-xxl g-row-xl g-col-md">
        {/* {[...Array(18)].map((_, i) => ( */}
        <Box col={'col-5'} />
        <Box col={'col-5'} />
        <Box col={'col-2'} />
        <Box col={'col-2'} />
        <Box col={'col-5'} />
        <Box col={'col-5'} />
        {/* ))} */}
      </div>
    </>
  )
}
