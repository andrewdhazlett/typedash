import type { AsyncReturnType } from 'type-fest'

// TODO: Use the one in `type-fest` when it's added there.
export type AnyAsyncFunction = (
  ...arguments_: ReadonlyArray<any>
) => Promise<unknown | void>

const cacheStore = new WeakMap<
  AnyAsyncFunction,
  CacheStorage<any, any> | false
>()

export type CacheStorage<KeyType, ValueType> = {
  has: (key: KeyType) => Promise<boolean> | boolean
  get: (key: KeyType) => Promise<ValueType | undefined> | ValueType | undefined
  set: (key: KeyType, value: ValueType) => Promise<unknown> | unknown
  delete: (key: KeyType) => unknown
  clear?: () => unknown
}

export type Options<
  FunctionToMemoize extends AnyAsyncFunction,
  CacheKeyType,
> = {
  /**
   * Determines the cache key for storing the result based on the function arguments. By default, __only the first argument is considered__ and it only works with [primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).
   *
   * ```
   * import pMemoize from 'p-memoize';
   *
   * pMemoize(function_, {cacheKey: JSON.stringify});
   * ```
   *
   * Or you can use a more full-featured serializer like [serialize-javascript](https://github.com/yahoo/serialize-javascript) to add support for `RegExp`, `Date` and so on.
   *
   * ```
   * import pMemoize from 'p-memoize';
   * import serializeJavascript from 'serialize-javascript';
   *
   * pMemoize(function_, {cacheKey: serializeJavascript});
   * ```
   *
   * @default arguments_ => arguments_[0]
   * @example arguments_ => JSON.stringify(arguments_)
   */
  readonly cacheKey?: (
    arguments_: Parameters<FunctionToMemoize>,
  ) => CacheKeyType

  /**
   * Use a different cache storage. Must implement the following methods: `.has(key)`, `.get(key)`, `.set(key, value)`, `.delete(key)`, and optionally `.clear()`. You could for example use a `WeakMap` instead or [`quick-lru`](https://github.com/sindresorhus/quick-lru) for a LRU cache. To disable caching so that only concurrent executions resolve with the same value, pass `false`.
   *
   * @default new Map()
   * @example new WeakMap()
   */
  readonly cache?:
    | CacheStorage<CacheKeyType, AsyncReturnType<FunctionToMemoize>>
    | false
}

export function memoizePromise<
  FunctionToMemoize extends AnyAsyncFunction,
  CacheKeyType,
>(
  fn: FunctionToMemoize,
  {
    cacheKey = ([firstArgument]) => firstArgument as CacheKeyType,
    cache = new Map<CacheKeyType, AsyncReturnType<FunctionToMemoize>>(),
  }: Options<FunctionToMemoize, CacheKeyType> = {},
): FunctionToMemoize {
  const promiseCache = new Map<
    CacheKeyType,
    Promise<AsyncReturnType<FunctionToMemoize>>
  >()

  const memoized = function (
    this: any,
    ...arguments_: Parameters<FunctionToMemoize>
  ): Promise<AsyncReturnType<FunctionToMemoize>> {
    // eslint-disable-line @typescript-eslint/promise-function-async
    const key = cacheKey(arguments_)

    if (promiseCache.has(key)) {
      return promiseCache.get(key)!
    }

    const promise = (async () => {
      try {
        if (cache && (await cache.has(key))) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return (await cache.get(key))!
        }

        const promise = fn.apply(this, arguments_) as Promise<
          AsyncReturnType<FunctionToMemoize>
        >

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const result = await promise

        try {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return result
        } finally {
          if (cache) {
            await cache.set(key, result)
          }
        }
      } finally {
        promiseCache.delete(key)
      }
    })() as Promise<AsyncReturnType<FunctionToMemoize>>

    promiseCache.set(key, promise)

    return promise
  } as FunctionToMemoize

  //   mimicFn(memoized, fn, {
  //     ignoreNonConfigurable: true,
  //   })

  cacheStore.set(memoized, cache)

  return memoized
}

export function pMemoizeDecorator<
  FunctionToMemoize extends AnyAsyncFunction,
  CacheKeyType,
>(options: Options<FunctionToMemoize, CacheKeyType> = {}) {
  const instanceMap = new WeakMap()

  return (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ): void => {
    // eslint-disable-next-line max-len
    // eslint-disable-next-line max-len, @typescript-eslint/no-unsafe-member-access
    const input = target[propertyKey] // eslint-disable-line @typescript-eslint/no-unsafe-assignment

    if (typeof input !== 'function') {
      throw new TypeError('The decorated value must be a function')
    }

    delete descriptor.value
    delete descriptor.writable

    descriptor.get = function () {
      if (!instanceMap.has(this)) {
        const value = memoizePromise(input, options) as FunctionToMemoize
        instanceMap.set(this, value)
        return value
      }

      return instanceMap.get(this) as FunctionToMemoize
    }
  }
}

export function pMemoizeClear(fn: AnyAsyncFunction): void {
  if (!cacheStore.has(fn)) {
    throw new TypeError("Can't clear a function that was not memoized!")
  }

  const cache = cacheStore.get(fn)

  if (!cache) {
    throw new TypeError("Can't clear a function that doesn't use a cache!")
  }

  if (typeof cache.clear !== 'function') {
    throw new TypeError("The cache Map can't be cleared!")
  }

  cache.clear()
}
