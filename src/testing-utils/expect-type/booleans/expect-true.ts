/**
 * @file Returns `true` only if `true` is passed; never otherwise.
 */

import type { IsAny } from '../../is-type/any-never-unknown/is-any';
import type { IsTrue } from '../../is-type/booleans/is-true';

/**
 * @description
 * Returns `true` **only** if `true` is passed.
 *
 * Raises an error and returns `never` otherwise.
 * @template TestedType Raises an error if anything other than `true` is passed into it...
 *
 * ...Unless it's `never` -- but we don't talk about it just yet.
 * @example
 * ```
 * type ExpectTrue_True = ExpectTrue<true>; // true
 *
 * // TS errors out on everything below:
 * type ExpectTrue_False = ExpectTrue<false>; // never
 * type ExpectTrue_Boolean = ExpectTrue<boolean>; // never
 * type ExpectTrue_Any = ExpectTrue<any>; // never
 * type ExpectTrue_Never = ExpectTrue<never>; // never
 * type ExpectTrue_Unknown = ExpectTrue<unknown>; // never
 * type ExpectTrue_String = ExpectTrue<string>; // never
 * type ExpectTrue_Number = ExpectTrue<number>; // never
 * ```
 */
export type ExpectTrue<
  TestedType extends IsAny<TestedType> extends true ? never : true
> = IsTrue<TestedType> extends true ? TestedType : never;
