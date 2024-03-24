/**
 * @file Returns true only if `false` is passed; false otherwise.
 */

import type { IsAny } from '../any-never-unknown/is-any';
import type { IsNever } from '../any-never-unknown/is-never';

/**
 * @description Returns `true` **only** if `false` is passed; `false` otherwise.
 * @example
 * ```
 * type IsFalse_False = IsFalse<false>; // true
 *
 * type IsFalse_True = IsFalse<true>; // false
 * type IsFalse_Boolean = IsFalse<boolean>; // false
 * type IsFalse_Any = IsFalse<any>; // false
 * type IsFalse_Never = IsFalse<never>; // false
 * type IsFalse_Unknown = IsFalse<unknown>; // false
 * type IsFalse_String = IsFalse<string>; // false
 * type IsFalse_Number = IsFalse<number>; // false
 * ```
 */
export type IsFalse<TestedType> = IsAny<TestedType> extends true
  ? false
  : IsNever<TestedType> extends true
  ? false
  : true extends TestedType
  ? false
  : TestedType extends false
  ? true
  : false;
