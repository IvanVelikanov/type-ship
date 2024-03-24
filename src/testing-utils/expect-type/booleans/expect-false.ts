/**
 * @file Returns true only if `false` is passed; never otherwise.
 */

import type { IsAny } from '../../is-type/any-never-unknown/is-any';
import type { IsFalse } from '../../is-type/booleans/is-false';

/**
 * @description Returns `true` **only** if `false` is passed; raises an error and returns `never` otherwise.
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
> = IsFalse<TestedType> extends true ? true : never;
