/**
 * @file Returns true only if `true` is passed; false otherwise.
 */

import type { IsAny } from '../any-never-unknown/is-any';
import type { IsNever } from '../any-never-unknown/is-never';

/**
 * @description Returns `true` **only** if `true` is passed; `false` otherwise.
 * @example
 * ```
 * type IsTrue_True = IsTrue<true>; // true
 *
 * type IsTrue_Boolean = IsTrue<boolean>; // false
 * type IsTrue_False = IsTrue<false>; // false
 * type IsTrue_Any = IsTrue<any>; // false
 * type IsTrue_Never = IsTrue<never>; // false
 * type IsTrue_Unknown = IsTrue<unknown>; // false
 * type IsTrue_String = IsTrue<string>; // false
 * type IsTrue_Number = IsTrue<number>; // false
 * ```
 */
export type IsTrue<TestedType> = IsAny<TestedType> extends true
  ? false
  : IsNever<TestedType> extends true
  ? false
  : false extends TestedType
  ? false
  : TestedType extends true
  ? true
  : false;
