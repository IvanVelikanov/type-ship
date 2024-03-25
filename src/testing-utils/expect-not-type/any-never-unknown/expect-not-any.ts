/**
 * @file Returns true only if anything other than `any` is passed; never if `any` is passed.
 */

import type { IsNotAny } from '../../is-not-type/any-never-unknown/is-not-any';

/**
 * @description Returns `true` if anything other than `any` is passed; raises an error and returns `never` if `any` is passed.
 * @template TestedType Raises an error if `any` is passed into it.
 * @example
 * ```
 * type ExpectNotAny_Boolean = ExpectNotAny<boolean>; // true
 * type ExpectNotAny_Never = ExpectNotAny<never>; // true
 * type ExpectNotAny_Unknown = ExpectNotAny<unknown>; // true
 * type ExpectNotAny_String = ExpectNotAny<string>; // true
 * type ExpectNotAny_Number = ExpectNotAny<number>; // true
 *
 * // TS errors out:
 * type ExpectNotAny_Any = ExpectNotAny<any>; // never
 * ```
 */
export type ExpectNotAny<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Testing for `any` here, dawg, hard to get around using `any`s in this context :)
  TestedType extends IsNotAny<TestedType> extends true ? any : never
> = IsNotAny<TestedType> extends true ? true : never;
