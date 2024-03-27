/**
 * @file Returns true only if `never` is passed; never otherwise.
 */

import type { IfNever } from '../../if-type/any-never-unknown/if-never';

/**
 * @description Returns `true` **only** if `never` is passed; raises an error and returns `never` otherwise.
 * @template TestedType Raises an error if anything other than `never` is passed into it...
 * @example
 * ```
 * type ExpectNever_Never = ExpectNever<never>; // never
 *
 * // TS errors out on everything below:
 * type ExpectNever_Boolean = ExpectNever<boolean>; // never
 * type ExpectNever_Any = ExpectNever<any>; // never
 * type ExpectNever_Unknown = ExpectNever<unknown>; // never
 * type ExpectNever_String = ExpectNever<string>; // never
 * type ExpectNever_Number = ExpectNever<number>; // never
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link IfNever}
 */
export type ExpectNever<TestedType extends never> = IfNever<
  TestedType,
  TestedType,
  never
>;
