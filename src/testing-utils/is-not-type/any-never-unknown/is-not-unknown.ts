/**
 * @file Returns false only if `unknown` is passed; true otherwise.
 */

import type { IsNotAny } from './is-not-any';

/**
 * @description Returns `false` **only** if `unknown` is passed; `true` otherwise.
 * @example
 * ```
 * type IsNotUnknown_Unknown = IsNotUnknown<unknown>; // false
 *
 * type IsNotUnknown_Any = IsNotUnknown<any>; // true
 * type IsNotUnknown_Never = IsNotUnknown<never>; // true
 * type IsNotUnknown_Boolean = IsNotUnknown<boolean>; // true
 * type IsNotUnknown_String = IsNotUnknown<string>; // true
 * type IsNotUnknown_Number = IsNotUnknown<number>; // true
 * ```
 */
export type IsNotUnknown<TestedType> = IsNotAny<TestedType> extends false
  ? true
  : unknown extends TestedType
  ? false
  : true;
