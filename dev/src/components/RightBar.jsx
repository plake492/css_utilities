import React from 'react'

export default function RightBar() {
  return (
    <aside
      className="h-vh-100 overflow-scroll bg-black-40 border-left"
      style={{ width: '200px' }}
    >
      <div className="d-flex flex-col gap-row-md p-md">
        <div style={{ height: '120px' }} className="w-100 border"></div>
        <div style={{ height: '120px' }} className="w-100 border"></div>
        <div style={{ height: '120px' }} className="w-100 border"></div>
        <div style={{ height: '120px' }} className="w-100 border"></div>
        <div style={{ height: '120px' }} className="w-100 border"></div>
        <div style={{ height: '120px' }} className="w-100 border"></div>
      </div>
    </aside>
  )
}
