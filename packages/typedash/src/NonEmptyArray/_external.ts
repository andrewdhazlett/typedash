// https://gcanti.github.io/fp-ts/modules/NonEmptyArray.ts.html
export {
  alt,
  altW,
  ap,
  apFirst,
  apS,
  apSecond,
  bind,
  bindTo,
  chain,
  chainFirst,
  chainWithIndex,
  chop,
  chunksOf,
  concat,
  concatAll,
  concatW,
  copy,
  duplicate,
  extend,
  extract,
  filter,
  filterWithIndex,
  flap,
  flatten,
  foldMap,
  foldMapWithIndex,
  fromArray,
  fromReadonlyNonEmptyArray,
  getEq,
  getSemigroup,
  getShow,
  getUnionSemigroup,
  group as groupEq,
  groupBy,
  head,
  init,
  insertAt,
  intercalate,
  intersperse,
  last,
  makeBy,
  map,
  mapWithIndex,
  matchLeft,
  matchRight,
  max as maxOrd,
  min as minOrd,
  modifyAt,
  modifyHead,
  modifyLast,
  of,
  prependAll,
  range,
  reduce,
  reduceRight,
  reduceRightWithIndex,
  reduceWithIndex,
  replicate,
  reverse,
  rotate,
  sequence,
  sort as sortOrd,
  sortBy as sortByOrd,
  splitAt,
  tail,
  traverse,
  traverseWithIndex,
  unappend,
  union,
  uniq as uniqEq,
  unprepend,
  unzip,
  updateAt,
  updateHead,
  updateLast,
  zip,
  zipWith,
  Monad,
} from 'fp-ts/NonEmptyArray'

export { includes, sort, sortBy, groupWith, uniq, uniqBy } from 'ramda'

export {
  included,
  lengthEq,
  lengthGt,
  lengthGte,
  lengthLt,
  lengthLte,
  lengthNotEq,
} from 'ramda-adjunct'

export type { NonEmptyArray } from 'fp-ts/NonEmptyArray'
