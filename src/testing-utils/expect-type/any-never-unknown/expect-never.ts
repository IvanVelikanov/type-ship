/**
 * @file Returns true only if `never` is passed; never otherwise.
 */

import type { IsNever } from '../../is-type/any-never-unknown/is-never';

/**
 * @description Returns `true` **only** if `never` is passed; raises an error and returns `never` otherwise.
 * @template TestedType Raises an error if anything other than `never` is passed into it...
 * @example
 * ```
 * type ExpectNever_Never = ExpectNever<never>; // true
 *
 * // TS errors out on everything below:
 * type ExpectNever_Boolean = ExpectNever<boolean>; // never
 * type ExpectNever_Any = ExpectNever<any>; // never
 * type ExpectNever_Unknown = ExpectNever<unknown>; // never
 * type ExpectNever_String = ExpectNever<string>; // never
 * type ExpectNever_Number = ExpectNever<number>; // never
 * ```
 */
export type ExpectNever<TestedType extends never> =
  IsNever<TestedType> extends true ? true : never;
