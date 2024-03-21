/**
 * @file Returns true only if `never` is passed; false otherwise.
 */

import type { IsAny } from './is-any';

/**
 * @description Internal helper for the {@link IsNever} type.
 * @example @see
 * See examples for {@link IsNever}.
 */
type IsNeverHelper<TestedType> = IsAny<TestedType> extends true
  ? false
  : TestedType extends never
  ? true
  : false;

/**
 * @description Returns `true` **only** if `never` is passed; `false` otherwise.
 * @example
 * ```
 * type IsNever_Never = IsNever<never>; // true
 *
 * type IsNever_Any = IsNever<any>; // false
 * type IsNever_Unknown = IsNever<unknown>; // false
 * type IsNever_String = IsNever<string>; // false
 * type IsNever_Number = IsNever<number>; // false
 * ```
 */
export type IsNever<TestedType> = IsNeverHelper<TestedType> extends never
  ? true
  : false;
