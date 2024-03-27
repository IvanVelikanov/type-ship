/**
 * @file Returns the boolean type that was passed into `TestedType` if the passed value is one of the following:
 * boolean, true | false, true, false.
 * Returns never otherwise.
 */

import type { IsAny } from '../../is-type/any-never-unknown/is-any';
import type { IsBoolean } from '../../is-type/booleans/is-boolean';

/**
 * @description
 * Returns the boolean type *that was passed into* `TestedType` if the passed value is one of the following:
 * - `boolean`
 * - `true | false`
 * - `true`
 * - `false`
 *
 * Raises an error and returns `never` otherwise.
 * @template TestedType Raises an error if anything other than `true`, `false`, `true | false` or `boolean` is passed into it...
 *
 * ...Unless it's `never` -- but we don't talk about it just yet.
 * @example
 * ```
 * type ExpectBoolean_Boolean = ExpectBoolean<boolean>; // boolean
 * type ExpectBoolean_TrueOrFalse = ExpectBoolean<true | false> // boolean
 * type ExpectBoolean_True = ExpectBoolean<true>; // true
 * type ExpectBoolean_False = ExpectBoolean<false>; // false
 *
 * // TS errors out on everything below:
 * type ExpectBoolean_Any = ExpectBoolean<any>; // never
 * type ExpectBoolean_Never = ExpectBoolean<never>; // never
 * type ExpectBoolean_Unknown = ExpectBoolean<unknown>; // never
 * type ExpectBoolean_String = ExpectBoolean<string>; // never
 * type ExpectBoolean_Number = ExpectBoolean<number>; // never
 * ```
 */
export type ExpectBoolean<
  TestedType extends IsAny<TestedType> extends true ? never : boolean
> = IsBoolean<TestedType> extends true ? TestedType : never;
