/**
 * @file Returns true only if `unknown` is passed; false otherwise.
 */

import type { IsAny } from './is-any';

/**
 * @description Returns `true` **only** if `unknown` is passed; `false` otherwise.
 * @example
 * ```
 * type IsUnknown_Unknown = IsUnknown<unknown>; // true
 *
 * type IsUnknown_Any = IsUnknown<any>; // false
 * type IsUnknown_Never = IsUnknown<never>; // false
 * type IsUnknown_Boolean = IsUnknown<boolean>; // false
 * type IsUnknown_String = IsUnknown<string>; // false
 * type IsUnknown_Number = IsUnknown<number>; // false
 * ```
 */
export type IsUnknown<TestedType> = IsAny<TestedType> extends true
  ? false
  : unknown extends TestedType
  ? true
  : false;
