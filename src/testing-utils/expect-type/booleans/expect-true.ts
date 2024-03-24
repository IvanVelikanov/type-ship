/**
 * @file Returns true only if `true` is passed; never otherwise.
 */

import type { IsAny } from '../../is-type/any-never-unknown/is-any';
import type { IsTrue } from '../../is-type/booleans/is-true';

/**
 * @description Returns `true` **only** if `true` is passed; raises an error and returns `never` otherwise.
 * @template TestedType Raises an error if anything other than `true` is passed into it...
 *
 * ... Unless it's `never` -- but we don't talk about it just yet.
 * @example
 * ```
 * type ExpectTrue_True = ExpectTrue<true>; // true
 *
 * // TS errors out on everything below:
 * type ExpectTrue_False = ExpectTrue<false>; // false
 * type ExpectTrue_Boolean = ExpectTrue<boolean>; // false
 * type ExpectTrue_Any = ExpectTrue<any>; // false
 * type ExpectTrue_Never = ExpectTrue<never>; // false
 * type ExpectTrue_Unknown = ExpectTrue<unknown>; // false
 * type ExpectTrue_String = ExpectTrue<string>; // false
 * type ExpectTrue_Number = ExpectTrue<number>; // false
 * ```
 */
export type ExpectTrue<
  TestedType extends IsAny<TestedType> extends true ? never : true
> = IsTrue<TestedType> extends true ? true : never;
