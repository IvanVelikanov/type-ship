/**
 * @file Returns `false` only if `false` is passed; never otherwise.
 */

import type { IfFalse } from '../../if-type/booleans/if-false';

/**
 * @description
 * Returns `false` **only** if `false` is passed.
 *
 * Raises an error and returns `never` otherwise.
 * @template TestedType Raises an error if anything other than `false` is passed into it...
 *
 * ...Unless it's `never` -- but we don't talk about it just yet.
 * @example
 * ```
 * type ExpectFalse_False = ExpectFalse<false>; // false
 *
 * // TS errors out on everything below:
 * type ExpectFalse_True = ExpectFalse<true>; // never
 * type ExpectFalse_Boolean = ExpectFalse<boolean>; // never
 * type ExpectFalse_Any = ExpectFalse<any>; // never
 * type ExpectFalse_Never = ExpectFalse<never>; // never
 * type ExpectFalse_Unknown = ExpectFalse<unknown>; // never
 * type ExpectFalse_String = ExpectFalse<string>; // never
 * type ExpectFalse_Number = ExpectFalse<number>; // never
 * ```
 */
export type ExpectFalse<
  TestedType extends IfFalse<TestedType, boolean, never>
> = IfFalse<TestedType, TestedType, never>;
