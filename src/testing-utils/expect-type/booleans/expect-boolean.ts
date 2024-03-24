/**
 * @file Returns true if any of the following types are passed to it:
 * boolean, true | false, true, false.
 * Returns never otherwise.
 */

import type { IsAny } from '../../is-type/any-never-unknown/is-any';
import type { IsBoolean } from '../../is-type/booleans/is-boolean';

/**
 * @description
 * Returns `true` if one of the following values is passed to `TestedType`:
 * - `boolean`;
 * - `true | false`;
 * - `true`;
 * - `false`.
 *
 * Returns `false` otherwise.
 * @template TestedType Raises an error if anything other than `true`, `false`, `true | false` or `boolean` is passed into it...
 *
 * ... Unless it's `never` -- but we don't talk about it just yet.
 * @example
 * ```
 * type ExpectBoolean_Boolean = ExpectBoolean<boolean>; // true
 * type ExpectBoolean_TrueOrFalse = ExpectBoolean<true | false> // true
 * type ExpectBoolean_True = ExpectBoolean<true>; // true
 * type ExpectBoolean_False = ExpectBoolean<false>; // true
 *
 * // TS errors out on everything below:
 * type ExpectBoolean_Any = ExpectBoolean<any>; // false
 * type ExpectBoolean_Never = ExpectBoolean<never>; // false
 * type ExpectBoolean_Unknown = ExpectBoolean<unknown>; // false
 * type ExpectBoolean_String = ExpectBoolean<string>; // false
 * type ExpectBoolean_Number = ExpectBoolean<number>; // false
 * ```
 */
export type ExpectBoolean<
  TestedType extends IsAny<TestedType> extends true ? never : boolean
> = IsBoolean<TestedType> extends true ? true : never;
