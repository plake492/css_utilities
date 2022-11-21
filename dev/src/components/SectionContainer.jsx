import React from 'react'

export default function SectionContainer({
  title,
  bgColor,
  children,
  titleType = 'h1'
}) {
  return (
    <section
      className={`px-md px-xl-lg px-xxl-xl border-bottom overflow-x-hidden py-lg ${bgColor}`}
      id={title.replace(/\s+/g, '-').toLowerCase()}
    >
      <p className={titleType}>{title}</p>
      {children}
    </section>
  )
}
