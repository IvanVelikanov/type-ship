/**
 * @file Returns true only if anything other than `unknown` is passed; never otherwise.
 */

import type { IsNotUnknown } from '../../is-not-type/any-never-unknown/is-not-unknown';

/**
 * @description Returns `true` if anything other than `unknown` is passed;
 * raises an error and returns `never` otherwise.
 * @template TestedType Raises an error if `unknown` is passed into it.
 * @example
 * ```
 * type ExpectNotUnknown_Boolean = ExpectNotUnknown<boolean>; // true
 * type ExpectNotUnknown_Any = ExpectNotUnknown<any>; // true
 * type ExpectNotUnknown_Never = ExpectNotUnknown<never>; // true
 * type ExpectNotUnknown_String = ExpectNotUnknown<string>; // true
 * type ExpectNotUnknown_Number = ExpectNotUnknown<number>; // true
 *
 * // TS errors out:
 * type ExpectNotUnknown_Unknown = ExpectNotUnknown<unknown>; // never
 * ```
 */
export type ExpectNotUnknown<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Makes sense to have any here, since anything except for unknown is permissible.
  TestedType extends IsNotUnknown<TestedType> extends true ? any : never
> = IsNotUnknown<TestedType> extends true ? true : never;
