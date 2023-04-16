import React from 'react'
import CodeSnippet from './CodeSnippet'

export default function Containers() {
  const containers = [
    'container',
    'container-sm',
    'container-md',
    'container-lg',
    'container-xl',
    'container-xxl',
    'container-fluid',
  ]
  return (
    <div>
      {containers.map((container, index) => (
        <div
          key={container + index}
          className={`bg-blue-${
            index + 1
          }0 py-md mb-md border-rounded ${container}`}
        >
          <p>{container}</p>
        </div>
      ))}
      <div className="container">
        <div className="escape-container-padding">
          <CodeSnippet
            code={containers.map((container) => ({
              classList: container,
              children: [{ tag: 'p', content: container }],
            }))}
          />
        </div>
      </div>
      <div
        className={`bg-blue-70 mb-md mt-xl container border-rounded d-flex flex-col justify-content-end`}
      >
        <p className="border border-rounded p-md my-md border-blue">
          Container
        </p>
        <div className={`bg-blue-30 escape-container p-md border-rounded`}>
          <p>Escape</p>
        </div>
        <div
          className={`bg-blue escape-container-padding py-md px-sm border-bl-rounded border-br-rounded`}
        >
          <p>Escaping the parent container padding</p>
        </div>
      </div>
      <div className="container">
        <div className="escape-container-padding">
          <CodeSnippet
            code={[
              {
                classList: 'container bg-blue-70',
                children: [
                  { tag: 'p', content: 'Container' },
                  {
                    classList: 'escape-container bg-blue-10',
                    children: [{ tag: 'p', content: 'Escape' }],
                  },
                  {
                    classList:
                      'escape-container-padding bg-blue-10 py-md px-sm',
                    children: [
                      {
                        tag: 'p',
                        content: 'Escaping the parent container padding',
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
      <div
        className={`bg-blue-70 mb-md mt-xl container border-rounded d-flex flex-col justify-content-end`}
      >
        <p className="border border-rounded p-md my-md border-blue">
          Container
        </p>
        <div className={`bg-blue-30 container border-rounded`}>
          <p className="m-md">Nested Container</p>
          <div
            className={`bg-purple-70 my-md container border-rounded d-flex flex-col justify-content-end`}
          >
            <p className="m-md">Double Nested</p>
            <div
              className={`bg-purple-20 my-md container border-rounded d-flex flex-col justify-content-end`}
            >
              <p className="m-md">Tripple Nested</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
