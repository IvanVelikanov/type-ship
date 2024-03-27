/**
 * @file Expects `any`, `never` or `unknown` to be passed.
 */

import type { IfAnyOrNeverOrUnknown } from '../../if-type/any-never-unknown/if-any-or-never-or-unknown';

/**
 * @description
 * Returns the type *that was passed into* `TestedType` if the passed value is one of the following:
 * - `any`
 * - `never`
 * - `unknown`
 *
 * Raises an error and returns `never` otherwise.
 * @template TestedType Raises an error if anything other than `any`, `never` or `unknown` is passed into it...
 * @example
 * ```
 * type ExpectAnyOrNeverOrUnknown_Any = ExpectAnyOrNeverOrUnknown<any>; // any
 * type ExpectAnyOrNeverOrUnknown_Never = ExpectAnyOrNeverOrUnknown<never>; // never
 * type ExpectAnyOrNeverOrUnknown_Unknown = ExpectAnyOrNeverOrUnknown<unknown>; // unknown
 *
 * // TS errors out on everything below:
 * type ExpectAnyOrNeverOrUnknown_Boolean = ExpectAnyOrNeverOrUnknown<boolean>; // never
 * type ExpectAnyOrNeverOrUnknown_String = ExpectAnyOrNeverOrUnknown<string>; // never
 * type ExpectAnyOrNeverOrUnknown_Number = ExpectAnyOrNeverOrUnknown<number>; // never
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link IfAnyOrNeverOrUnknown}
 */
export type ExpectAnyOrNeverOrUnknown<
  TestedType extends IfAnyOrNeverOrUnknown<TestedType, unknown, never>
> = IfAnyOrNeverOrUnknown<TestedType, TestedType, never>;
