/**
 * @file Returns true only if `unknown` is passed; never otherwise.
 */

import type { IsUnknown } from '../../is-type/any-never-unknown/is-unknown';

/**
 * @description Returns `true` **only** if `unknown` is passed; raises an error and returns `never` otherwise.
 * @template TestedType Raises an error if anything other than `unknown` is passed into it...
 *
 * ... Unless it's `never` -- but we don't talk about it just yet.
 * @example
 * ```
 * type ExpectUnknown_Unknown = ExpectUnknown<unknown>; // true
 *
 * // TS errors out on everything below:
 * type ExpectUnknown_Boolean = ExpectUnknown<boolean>; // never
 * type ExpectUnknown_Any = ExpectUnknown<any>; // never
 * type ExpectUnknown_Never = ExpectUnknown<never>; // never
 * type ExpectUnknown_String = ExpectUnknown<string>; // never
 * type ExpectUnknown_Number = ExpectUnknown<number>; // never
 * ```
 */
export type ExpectUnknown<
  TestedType extends IsUnknown<TestedType> extends true ? unknown : never
> = IsUnknown<TestedType> extends true ? true : never;
