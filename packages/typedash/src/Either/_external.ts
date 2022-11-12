// https://gcanti.github.io/fp-ts/modules/Either.ts.html
export {
  alt,
  altW,
  ap,
  apFirst,
  apFirstW,
  Applicative,
  Apply,
  apS,
  apSecond,
  apSecondW,
  apSW,
  ApT,
  apW,
  bimap,
  bind,
  bindTo,
  bindW,
  chain,
  chainFirst,
  chainFirstW,
  chainNullableK,
  chainOptionK,
  chainW,
  Do,
  duplicate,
  elem,
  exists,
  extend,
  filterOrElse,
  filterOrElseW,
  flap,
  flatten,
  flattenW,
  fold,
  foldMap,
  foldW,
  fromNullable,
  fromNullableK,
  fromOption,
  fromOptionK,
  fromPredicate,
  getAltValidation,
  getApplicativeValidation,
  getCompactable,
  getEq,
  getFilterable,
  getOrElse,
  getOrElseW,
  getSemigroup,
  getShow,
  getWitherable,
  isLeft,
  isRight,
  left,
  map,
  mapLeft,
  match,
  matchW,
  of,
  orElse,
  orElseW,
  reduce,
  reduceRight,
  right,
  sequence,
  sequenceArray,
  swap,
  throwError,
  toError,
  toUnion,
  traverse,
  traverseArray,
  traverseArrayWithIndex,
  traverseReadonlyArrayWithIndex,
  traverseReadonlyNonEmptyArrayWithIndex,
  tryCatch,
  tryCatchK,
} from 'fp-ts/Either'

export type { Either, Left, Right } from 'fp-ts/Either'

export { unsafeUnwrap } from 'fp-ts-std/Either'
