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
 * type ExpectNever_Boolean = ExpectNever<boolean>; // false
 * type ExpectNever_Any = ExpectNever<any>; // false
 * type ExpectNever_Unknown = ExpectNever<unknown>; // false
 * type ExpectNever_String = ExpectNever<string>; // false
 * type ExpectNever_Number = ExpectNever<number>; // false
 * ```
 */
export type ExpectNever<TestedType extends never> =
  IsNever<TestedType> extends true ? true : never;
