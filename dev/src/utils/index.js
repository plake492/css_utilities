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