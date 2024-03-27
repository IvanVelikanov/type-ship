/**
 * @file Returns the passed type if anything other than `unknown` is passed; never otherwise.
 */

import type { IfNotUnknown } from '../../if-not-type/any-never-unknown/if-not-unknown';

/**
 * @description
 * Returns the type passed to `TestedType` if anything other than `unknown` is passed.
 *
 * Raises an error and returns `never` otherwise.
 * @template TestedType Raises an error if `unknown` is passed into it.
 * @example
 * ```
 * type ExpectNotUnknown_Boolean = ExpectNotUnknown<boolean>; // boolean
 * type ExpectNotUnknown_Any = ExpectNotUnknown<any>; // any
 * type ExpectNotUnknown_Never = ExpectNotUnknown<never>; // never
 * type ExpectNotUnknown_String = ExpectNotUnknown<string>; // string
 * type ExpectNotUnknown_Number = ExpectNotUnknown<number>; // number
 * type ExpectNotUnknown_StringLiteral = ExpectNotUnknown<'a very interesting sentence'>; // 'a very interesting sentence'
 *
 * // TS errors out:
 * type ExpectNotUnknown_Unknown = ExpectNotUnknown<unknown>; // never
 * ```
 * @see
 * Types used under the hood:
 * - IfNotType: {@link IfNotUnknown}
 */
export type ExpectNotUnknown<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Makes sense to have any here, since anything except for unknown is permissible.
  TestedType extends IfNotUnknown<TestedType, any, never>
> = IfNotUnknown<TestedType, TestedType, never>;
