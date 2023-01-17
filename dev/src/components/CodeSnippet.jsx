import React, { isValidElement, cloneElement } from 'react'
import { conditionalClasses } from '../utils'

function HTMLTags({
  tag = div,
  indent = false,
  classList = null,
  styles = null,
  children
}) {
  console.log(children)

  return (
    <div className={conditionalClasses([indent, 'pl-lg'])}>
      <span>&#60;</span>
      <span style={{ color: '#1e87c6' }}>{tag}</span>
      {classList ? (
        <>
          {' '}
          <span style={{ color: '#f9a004' }}>class</span>=
          <span style={{ color: '#ea0bb3' }}>"{classList}"</span>
        </>
      ) : null}
      {styles ? (
        <>
          {' '}
          <span style={{ color: '#f9a004' }}>style</span>=
          <span style={{ color: '#ea0bb3' }}>"{styles}"</span>
        </>
      ) : null}
      <span>&#62;</span>
      {children}
      <span>&#60;/</span>
      <span style={{ color: '#1e87c6' }}>{tag}</span>
      <span>&#62;</span>
    </div>
  )
}

function HTMLLine({ snip, indent = false }) {
  return (
    <HTMLTags
      tag={snip?.tag || 'div'}
      classList={snip?.classList}
      styles={snip?.styles}
      indent={indent}
    >
      {snip?.content ? snip?.content : null}
      {snip?.children && Array.isArray(snip.children)
        ? snip.children.map(snipTwo => (
            <HTMLLine snip={snipTwo} indent={true} />
          ))
        : null}
    </HTMLTags>
  )
}

export default function CodeSnippet({
  children,
  topBg = 'bg-grey',
  desc,
  code,
  lang = 'html'
}) {
  return (
    <div className="bg-black border border-white border-rounded mb-md overflow-hidden">
      {children ? (
        <div className={`${topBg} px-md py-lg border-bottom`}>{children}</div>
      ) : null}
      <div className="p-md">
        <code data-lang={lang}>
          {code.map(snip => (
            <HTMLLine snip={snip} />
          ))}
        </code>
      </div>
    </div>
  )
}
