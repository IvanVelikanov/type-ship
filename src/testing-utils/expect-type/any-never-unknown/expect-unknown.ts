/**
 * @file Returns true only if `unknown` is passed; never otherwise.
 */

import type { IfUnknown } from '../../if-type/any-never-unknown/if-unknown';

/**
 * @description Returns `true` **only** if `unknown` is passed; raises an error and returns `never` otherwise.
 * @template TestedType Raises an error if anything other than `unknown` is passed into it...
 *
 * ...Unless it's `never` -- but we don't talk about it just yet.
 * @example
 * ```
 * type ExpectUnknown_Unknown = ExpectUnknown<unknown>; // unknown
 *
 * // TS errors out on everything below:
 * type ExpectUnknown_Boolean = ExpectUnknown<boolean>; // never
 * type ExpectUnknown_Any = ExpectUnknown<any>; // never
 * type ExpectUnknown_Never = ExpectUnknown<never>; // never
 * type ExpectUnknown_String = ExpectUnknown<string>; // never
 * type ExpectUnknown_Number = ExpectUnknown<number>; // never
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link IfUnknown}
 */
export type ExpectUnknown<
  TestedType extends IfUnknown<TestedType, unknown, never>
> = IfUnknown<TestedType, TestedType, never>;
