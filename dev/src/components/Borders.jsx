import React from 'react'

export default function Borders() {
  const borders = [
    'border',
    'border-top',
    'border-right',
    'border-bottom',
    'border-left'
  ]

  const borderColors = [
    'border-primary',
    'border-yellow',
    'border-accent',
    'border-teriary',
    'border-red'
  ]

  const borderWidths = [
    'border-1',
    'border-2',
    'border-3',
    'border-4',
    'border-5'
  ]

  const borderRadius = ['border-rounded', 'border-pill', 'border-circle']

  const borderRadiusParts = [
    'border-tl-circle',
    'border-tr-circle',
    'bg-grey border border-bl-circle border-blue border-5 border-tr-pill',
    'border-br-circle',
    'border-bl-circle border-br-circle',
    'border-tl-circle border-tr-circle'
  ]

  return (
    <>
      <div className="mb-xl border-bottom pb-xl pb-md-none border-md-bottom-none">
        <p className="h5">Borders</p>
        <div className="d-flex flex-wrap flex-md-nowrap justify-content-start gap-md gap-md-xl">
          {borders.map((border, i) => (
            <div
              key={i}
              style={{ width: '100px', height: '100px' }}
              className={`bg-grey ${border}`}
            ></div>
          ))}
        </div>
      </div>

      <div className="mb-xl border-bottom pb-xl pb-md-none border-md-bottom-none">
        <p className="h5 text-center">Border Colors</p>
        <div className="d-flex flex-wrap flex-md-nowrap justify-content-center gap-md gap-md-xl">
          {borderColors.map((border, i) => (
            <div
              key={i}
              style={{ width: '100px', height: '100px' }}
              className={`bg-grey border ${border}`}
            ></div>
          ))}
        </div>
      </div>

      <div className="mb-xl border-bottom pb-xl pb-md-none border-md-bottom-none">
        <p className="h5 text-end">Border Widths</p>
        <div className="d-flex flex-wrap flex-md-nowrap justify-content-end gap-md gap-md-xl">
          {borderWidths.map((border, i) => (
            <div
              key={i}
              style={{ width: '100px', height: '100px' }}
              className={`bg-grey border ${border}`}
            ></div>
          ))}
        </div>
      </div>

      <div className="mb-xl border-bottom pb-xl pb-md-none border-md-bottom-none">
        <p className="h5">Border Radius</p>
        <div className="d-flex flex-wrap flex-md-nowrap justify-content-start gap-md gap-md-xl">
          {borderRadius.map((border, i) => (
            <div
              key={i}
              style={{ width: '100px', height: '100px' }}
              className={`bg-grey border ${border}`}
            ></div>
          ))}
        </div>
      </div>

      <div className="mb-xl border-bottom pb-xl pb-md-none border-md-bottom-none">
        <p className="h5">Border Radius pieces</p>
        <div className="d-flex flex-wrap flex-md-nowrap justify-content-start gap-md gap-md-xl">
          {borderRadiusParts.map((border, i) => (
            <div
              key={i}
              style={{ width: '100px', height: '100px' }}
              className={`bg-grey border ${border}`}
            ></div>
          ))}
        </div>
      </div>

      <div className="row g-md">
        <div
          style={{ height: '600px' }}
          className="col-6 d-flex flex-col bg-grey-40 mt-xl border-tl-pill border-br-pill border-tr-circle border-bl-circle border-violet border-accent border border-4 overflow-hidden"
        >
          <img
            style={{ objectFit: 'cover', objectPosition: '19%' }}
            width="100%"
            height="100%"
            className="flex-1 border-bottom border-red border-3"
            src="https://images.unsplash.com/photo-1668910283626-f79cca6429c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          />
          <div className="flex-center flex-1">
            <p>Silly Card</p>
          </div>
        </div>
        <div
          style={{ height: '600px' }}
          className="col-6 d-flex flex-col bg-grey-40 mt-xl border-tr-pill border-bl-pill border-tl-circle border-br-circle border-accent border-accent border border-4 overflow-hidden"
        >
          <img
            style={{ objectFit: 'cover', objectPosition: '19%' }}
            width="100%"
            height="100%"
            className="flex-1 border-bottom border-red border-3"
            src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          />
          <div className="flex-center flex-1">
            <p>Silly Card</p>
          </div>
        </div>
      </div>
    </>
  )
}
