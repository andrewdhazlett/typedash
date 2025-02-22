// https://gcanti.github.io/fp-ts/modules/string.ts.html
export {
  empty,
  endsWith,
  Eq,
  includes,
  isEmpty,
  isString,
  Monoid,
  Ord,
  replace,
  size,
  slice,
  split as splitRNEA,
  startsWith,
  toLowerCase,
  toUpperCase,
  trim,
  trimLeft,
  trimRight,
} from 'fp-ts/string'

// https://samhh.github.io/fp-ts-std/modules/String.ts.html
export {
  append,
  dropLeft,
  dropLeftWhile,
  dropRight,
  dropRightWhile,
  fromNumber,
  head,
  init,
  isAlpha,
  isAlphaNum,
  isLower,
  isUpper,
  last,
  lines,
  lookup,
  match,
  matchAll,
  prepend,
  replaceAll,
  reverse,
  splitAt,
  surround,
  tail,
  takeLeft,
  takeLeftWhile,
  takeRight,
  takeRightWhile,
  test,
  unappend,
  under,
  unlines,
  unprepend,
  unsurround,
  isSpace,
} from 'fp-ts-std/String'

export { equals, concat } from 'ramda'
export { padEnd, padStart, padCharsEnd, padCharsStart } from 'ramda-adjunct'

// TODO: Replace with something else
export { toInteger } from 'lodash/fp'
