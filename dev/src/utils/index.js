/**
 * A helper function for generating classes bases on a boolean condition.
 * @param rules Accepts Arrays containing a boolean condition at index[0],
 *              followed by a string value at index[1],
 *              and an optional fallback string value at index[2]
 * @returns String of values seperated by a space
 */
export const conditionalClasses = (...rules) =>
  rules &&
  Array.isArray(rules) &&
  rules
    .map(([condition, style, fallback]) => (condition ? style : fallback || ''))
    .join(' ')
    .trim()

export const breakpoints = {
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1400px)'
}

export const getCssVar = cssVarTarget => {
  return Array.from(document.styleSheets)
    .filter(
      sheet =>
        sheet.href === null || sheet.href.startsWith(window.location.origin)
    )
    .reduce(
      (acc, sheet) =>
        (acc = [
          ...acc,
          ...Array.from(sheet.cssRules).reduce(
            (def, rule) =>
              (def =
                rule.selectorText === ':root'
                  ? [
                      ...def,
                      ...Array.from(rule.style).filter(name =>
                        name.startsWith(cssVarTarget)
                      )
                    ]
                  : def),
            []
          )
        ]),
      []
    )
}

export const hyphenat = str => str.replace(/\s+/g, '-').toLowerCase()
