import React from 'react'

export default function Flex() {
  return (
    <section
      className="px-md px-lg-xl px-xl-xxlborder-bottom bg-black-30"
      id="flex"
    >
      <p className="h1">Flex</p>

      <div className="py-xl">
        <p className="h5">Justify Content (Row)</p>
        <div className="my-md" id="justify-content-start">
          <p>.justify-content-start</p>
          <div
            style={{ height: '50px' }}
            className="py-xs w-100 border border-rounded bg-violet d-flex justify-content-start"
          >
            <div className="w-25 h-100 flex-center border border-rounded bg-blue-60">
              1
            </div>
            <div className="w-25 h-100 flex-center border border-rounded bg-blue-60">
              2
            </div>
            <div className="w-25 h-100 flex-center border border-rounded bg-blue-60">
              3
            </div>
          </div>
        </div>
        <div className="my-md" id="justify-content-center">
          <p>.justify-content-center</p>
          <div
            style={{ height: '50px' }}
            className="py-xs w-100 border border-rounded bg-violet d-flex justify-content-center"
          >
            <div className="w-25 h-100 flex-center border border-rounded bg-blue-60">
              1
            </div>
            <div className="w-25 h-100 flex-center border border-rounded bg-blue-60">
              2
            </div>
            <div className="w-25 h-100 flex-center border border-rounded bg-blue-60">
              3
            </div>
          </div>
        </div>
        <div className="my-md" id="justify-content-end">
          <p>.justify-content-end</p>
          <div
            style={{ height: '50px' }}
            className="py-xs w-100 border border-rounded bg-violet d-flex justify-content-end"
          >
            <div className="w-25 h-100 flex-center border border-rounded bg-blue-60">
              1
            </div>
            <div className="w-25 h-100 flex-center border border-rounded bg-blue-60">
              2
            </div>
            <div className="w-25 h-100 flex-center border border-rounded bg-blue-60">
              3
            </div>
          </div>
        </div>
        <div className="my-md" id="justify-content-between">
          <p>.justify-content-between</p>
          <div
            style={{ height: '50px' }}
            className="py-xs w-100 border border-rounded bg-violet d-flex justify-content-between"
          >
            <div className="w-25 h-100 flex-center border border-rounded bg-blue-60">
              1
            </div>
            <div className="w-25 h-100 flex-center border border-rounded bg-blue-60">
              2
            </div>
            <div className="w-25 h-100 flex-center border border-rounded bg-blue-60">
              3
            </div>
          </div>
        </div>
        <div className="my-md" id="justify-content-around">
          <p>.justify-content-around</p>
          <div
            style={{ height: '50px' }}
            className="py-xs w-100 border border-rounded bg-violet d-flex justify-content-around"
          >
            <div className="w-25 h-100 flex-center border border-rounded bg-blue-60">
              1
            </div>
            <div className="w-25 h-100 flex-center border border-rounded bg-blue-60">
              2
            </div>
            <div className="w-25 h-100 flex-center border border-rounded bg-blue-60">
              3
            </div>
          </div>
        </div>
        <div className="my-md" id="justify-content-even">
          <p>.justify-content-even</p>
          <div
            style={{ height: '50px' }}
            className="py-xs w-100 border border-rounded bg-violet d-flex justify-content-even"
          >
            <div className="w-25 h-100 flex-center border border-rounded bg-blue-60">
              1
            </div>
            <div className="w-25 h-100 flex-center border border-rounded bg-blue-60">
              2
            </div>
            <div className="w-25 h-100 flex-center border border-rounded bg-blue-60">
              3
            </div>
          </div>
        </div>
      </div>

      <div className="py-xl">
        <p className="h5">Justify Content (Col)</p>
        <div className="d-flex flex-wrap gap-md">
          <div
            className="my-md w-100 w-md-50 w-lg-33"
            id="justify-content-start"
          >
            <p>.justify-content-start</p>
            <div
              style={{ height: '200px' }}
              className="py-xs w-100 border border-rounded bg-violet d-flex flex-col justify-content-start"
            >
              <div className="w-100 flex-center border border-rounded bg-blue-60">
                1
              </div>
              <div className="w-100 flex-center border border-rounded bg-blue-60">
                2
              </div>
              <div className="w-100 flex-center border border-rounded bg-blue-60">
                3
              </div>
            </div>
          </div>
          <div
            className="my-md w-100 w-md-50 w-lg-33"
            id="justify-content-center"
          >
            <p>.justify-content-center</p>
            <div
              style={{ height: '200px' }}
              className="py-xs w-100 border border-rounded bg-violet d-flex flex-col justify-content-center"
            >
              <div className="w-100 flex-center border border-rounded bg-blue-60">
                1
              </div>
              <div className="w-100 flex-center border border-rounded bg-blue-60">
                2
              </div>
              <div className="w-100 flex-center border border-rounded bg-blue-60">
                3
              </div>
            </div>
          </div>
          <div className="my-md w-100 w-md-50 w-lg-33" id="justify-content-end">
            <p>.justify-content-end</p>
            <div
              style={{ height: '200px' }}
              className="py-xs w-100 border border-rounded bg-violet d-flex flex-col justify-content-end"
            >
              <div className="w-100 flex-center border border-rounded bg-blue-60">
                1
              </div>
              <div className="w-100 flex-center border border-rounded bg-blue-60">
                2
              </div>
              <div className="w-100 flex-center border border-rounded bg-blue-60">
                3
              </div>
            </div>
          </div>
          <div
            className="my-md w-100 w-md-50 w-lg-33"
            id="justify-content-between"
          >
            <p>.justify-content-between</p>
            <div
              style={{ height: '200px' }}
              className="py-xs w-100 border border-rounded bg-violet d-flex flex-col justify-content-between"
            >
              <div className="w-100 flex-center border border-rounded bg-blue-60">
                1
              </div>
              <div className="w-100 flex-center border border-rounded bg-blue-60">
                2
              </div>
              <div className="w-100 flex-center border border-rounded bg-blue-60">
                3
              </div>
            </div>
          </div>
          <div
            className="my-md w-100 w-md-50 w-lg-33"
            id="justify-content-around"
          >
            <p>.justify-content-around</p>
            <div
              style={{ height: '200px' }}
              className="py-xs w-100 border border-rounded bg-violet d-flex flex-col justify-content-around"
            >
              <div className="w-100 flex-center border border-rounded bg-blue-60">
                1
              </div>
              <div className="w-100 flex-center border border-rounded bg-blue-60">
                2
              </div>
              <div className="w-100 flex-center border border-rounded bg-blue-60">
                3
              </div>
            </div>
          </div>
          <div
            className="my-md w-100 w-md-50 w-lg-33"
            id="justify-content-even"
          >
            <p>.justify-content-even</p>
            <div
              style={{ height: '200px' }}
              className="py-xs w-100 border border-rounded bg-violet d-flex flex-col justify-content-even"
            >
              <div className="w-100 flex-center border border-rounded bg-blue-60">
                1
              </div>
              <div className="w-100 flex-center border border-rounded bg-blue-60">
                2
              </div>
              <div className="w-100 flex-center border border-rounded bg-blue-60">
                3
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
