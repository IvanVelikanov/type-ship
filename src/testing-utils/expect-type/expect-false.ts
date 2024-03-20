/**
 * @file Returns true only if `false` is passed; false otherwise.
 */

import type { IsAny } from '../is-type/is-any';
import type { IsNever } from '../is-type/is-never';

/**
 * @description Returns `true` **only** if `false` is passed; raises an error and returns `false` otherwise.
 * @template TestedType Raises an error if anything other than `false` is passed into it...
 *
 * ... Unless it's `never` -- but we don't talk about it just yet.
 * @example
 * ```
 * type ExpectFalse_False = ExpectFalse<false>; // true
 *
 * // TS errors out on everything below:
 * type ExpectFalse_True = ExpectFalse<true>; // false
 * type ExpectFalse_Boolean = ExpectFalse<boolean>; // false
 * type ExpectFalse_Any = ExpectFalse<any>; // false
 * type ExpectFalse_Never = ExpectFalse<never>; // false
 * type ExpectFalse_Unknown = ExpectFalse<unknown>; // false
 * type ExpectFalse_String = ExpectFalse<string>; // false
 * type ExpectFalse_Number = ExpectFalse<number>; // false
 * ```
 */
export type ExpectFalse<
  TestedType extends IsAny<TestedType> extends true ? never : false
> = IsAny<TestedType> extends true
  ? false
  : IsNever<TestedType> extends true
  ? false
  : true extends TestedType
  ? false
  : TestedType extends false
  ? true
  : false;
