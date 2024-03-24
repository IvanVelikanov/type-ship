/**
 * @file Returns true only if `any` is passed; never otherwise.
 */

import type { IsAny } from '../../is-type/any-never-unknown/is-any';

/**
 * @description Returns `true` **only** if `any` is passed; raises an error and returns `never` otherwise.
 * @template TestedType Raises an error if anything other than `any` is passed into it...
 *
 * ... Unless it's `never` -- but we don't talk about it just yet.
 * @example
 * ```
 * type ExpectAny_Any = ExpectAny<any>; // true
 *
 * // TS errors out on everything below:
 * type ExpectAny_Boolean = ExpectAny<boolean>; // false
 * type ExpectAny_Never = ExpectAny<never>; // false
 * type ExpectAny_Unknown = ExpectAny<unknown>; // false
 * type ExpectAny_String = ExpectAny<string>; // false
 * type ExpectAny_Number = ExpectAny<number>; // false
 * ```
 */
export type ExpectAny<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Testing for `any` here, dawg, hard to get around using `any`s in this context :)
  TestedType extends IsAny<TestedType> extends true ? any : never
> = IsAny<TestedType> extends true ? true : never;
