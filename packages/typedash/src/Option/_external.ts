// https://gcanti.github.io/fp-ts/modules/Option.ts.html
export {
  alt,
  altW,
  ap,
  apFirst,
  Applicative,
  Apply,
  apS,
  apSecond,
  ApT,
  bind,
  bindTo,
  chain,
  chainEitherK,
  chainFirst,
  chainFirstEitherK,
  chainNullableK,
  compact,
  Do,
  duplicate,
  elem,
  exists,
  extend,
  filter,
  filterMap,
  flap,
  flatten,
  fold,
  foldMap,
  foldW,
  fromEither,
  fromEitherK,
  fromNullable,
  fromNullableK,
  fromPredicate,
  getEq,
  getLeft,
  getMonoid,
  getOrd,
  getOrElse,
  getOrElseW,
  getRight,
  getShow,
  guard,
  isNone,
  isSome,
  map,
  match,
  matchW,
  none,
  of,
  partition,
  partitionMap,
  reduce,
  reduceRight,
  separate,
  sequence,
  sequenceArray,
  some,
  throwError,
  toNullable,
  toUndefined,
  traverse,
  traverseArray,
  traverseArrayWithIndex,
  traverseReadonlyArrayWithIndex,
  traverseReadonlyNonEmptyArrayWithIndex,
  tryCatch,
  tryCatchK,
  wilt,
  wither,
  zero,
} from 'fp-ts/Option'
export type { Option, Some, None } from 'fp-ts/Option'

export {
  unsafeUnwrap,
  invert,
  memptyUnless,
  memptyWhen,
  noneAs,
  pureIf,
  toMonoid,
} from 'fp-ts-std/Option'
