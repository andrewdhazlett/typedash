import { MemoizeOptions } from './types'

export const MEMOIZE_DEFAULT_TTL_MS = 3_600_000 // 1 hr
export const MEMOIZE_DEFAULT_OPTIONS = {
  ttlMs: MEMOIZE_DEFAULT_TTL_MS,
}
