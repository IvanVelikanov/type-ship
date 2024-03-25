/**
 * @file Returns false only if `never` is passed; true otherwise.
 */

import type { IsNotAny } from './is-not-any';

/**
 * @description Internal helper for the {@link IsNotNever} type.
 * @example @see
 * See examples for {@link IsNotNever}.
 */
type IsNotNeverHelper<TestedType> = IsNotAny<TestedType> extends false
  ? false
  : TestedType extends never
  ? true
  : false;

/**
 * @description Returns `false` **only** if `never` is passed; `true` otherwise.
 * @example
 * ```
 * type IsNotNever_Never = IsNotNever<never>; // false
 *
 * type IsNotNever_Any = IsNotNever<any>; // true
 * type IsNotNever_Unknown = IsNotNever<unknown>; // true
 * type IsNotNever_String = IsNotNever<string>; // true
 * type IsNotNever_Number = IsNotNever<number>; // true
 * ```
 */
export type IsNotNever<TestedType> = IsNotNeverHelper<TestedType> extends never
  ? false
  : true;
