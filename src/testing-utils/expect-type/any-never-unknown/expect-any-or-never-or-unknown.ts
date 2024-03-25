/**
 * @file Returns true only if any or never or unknown is passed; never otherwise.
 */

import type { IsAnyOrNeverOrUnknown } from '../../is-type/any-never-unknown/is-any-or-never-or-unknown';

/**
 * @description Returns `true` **only** if `any`, `never` or `unknown` is passed; raises an error and returns `never` otherwise.
 * @template TestedType Raises an error if anything other than `any`, `never` or `unknown` is passed into it...
 * @example
 * ```
 * type ExpectAnyOrNeverOrUnknown_Any = ExpectAnyOrNeverOrUnknown<any>; // true
 * type ExpectAnyOrNeverOrUnknown_Never = ExpectAnyOrNeverOrUnknown<never>; // true
 * type ExpectAnyOrNeverOrUnknown_Unknown = ExpectAnyOrNeverOrUnknown<unknown>; // true
 *
 * // TS errors out on everything below:
 * type ExpectAnyOrNeverOrUnknown_Boolean = ExpectAnyOrNeverOrUnknown<boolean>; // never
 * type ExpectAnyOrNeverOrUnknown_String = ExpectAnyOrNeverOrUnknown<string>; // never
 * type ExpectAnyOrNeverOrUnknown_Number = ExpectAnyOrNeverOrUnknown<number>; // never
 * ```
 */
export type ExpectAnyOrNeverOrUnknown<
  TestedType extends IsAnyOrNeverOrUnknown<TestedType> extends true
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Testing for `any` here, dawg, hard to get around using `any`s in this context :)
      any
    : never
> = IsAnyOrNeverOrUnknown<TestedType> extends true ? true : never;
