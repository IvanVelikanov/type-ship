/**
 * @file Returns true only if `false` is passed; never otherwise.
 */

import type { IsAny } from '../../is-type/any-never-unknown/is-any';
import type { IsFalse } from '../../is-type/booleans/is-false';

/**
 * @description Returns `true` **only** if `false` is passed;
 * raises an error and returns `never` otherwise.
 * @template TestedType Raises an error if anything other than `false` is passed into it...
 *
 * ... Unless it's `never` -- but we don't talk about it just yet.
 * @example
 * ```
 * type ExpectFalse_False = ExpectFalse<false>; // true
 *
 * // TS errors out on everything below:
 * type ExpectFalse_True = ExpectFalse<true>; // never
 * type ExpectFalse_Boolean = ExpectFalse<boolean>; // never
 * type ExpectFalse_Any = ExpectFalse<any>; // never
 * type ExpectFalse_Never = ExpectFalse<never>; // never
 * type ExpectFalse_Unknown = ExpectFalse<unknown>; // never
 * type ExpectFalse_String = ExpectFalse<string>; // never
 * type ExpectFalse_Number = ExpectFalse<number>; // never
 * ```
 */
export type ExpectFalse<
  TestedType extends IsAny<TestedType> extends true ? never : false
> = IsFalse<TestedType> extends true ? true : never;
