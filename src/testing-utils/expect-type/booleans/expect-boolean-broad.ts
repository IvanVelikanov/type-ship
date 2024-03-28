/**
 * @file Returns `boolean` if `boolean` or `true | false` are passed to it.
 * Returns never if a boolean literal (`true` or `false`) or anything else is passed.
 */

import type { IfBooleanBroad } from '../../if-type/booleans/if-boolean-broad';

/**
 * @description
 * Returns `boolean` only if one of the following values is passed to `TestedType`:
 * - `boolean`
 * - `true | false`
 *
 * Raises an error and returns `never` otherwise.
 * @template TestedType Raises an error if anything other than `boolean` OR `true | false` is passed into it...
 *
 * ...Unless it's `never` -- but we don't talk about it just yet.
 * @example
 * ```
 * type ExpectBooleanBroad_Boolean = ExpectBooleanBroad<boolean>; // boolean
 * type ExpectBooleanBroad_TrueOrFalse = ExpectBooleanBroad<true | false> // boolean
 *
 * // TS errors out on everything below:
 * type ExpectBooleanBroad_True = ExpectBooleanBroad<true>; // never
 * type ExpectBooleanBroad_False = ExpectBooleanBroad<false>; // never
 *
 * type ExpectBooleanBroad_Any = ExpectBooleanBroad<any>; // never
 * type ExpectBooleanBroad_Never = ExpectBooleanBroad<never>; // never
 * type ExpectBooleanBroad_Unknown = ExpectBooleanBroad<unknown>; // never
 * type ExpectBooleanBroad_String = ExpectBooleanBroad<string>; // never
 * type ExpectBooleanBroad_Number = ExpectBooleanBroad<number>; // never
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link IfBooleanBroad}
 */
export type ExpectBooleanBroad<
  TestedType extends IfBooleanBroad<TestedType, boolean, never>
> = IfBooleanBroad<TestedType, TestedType, never>;
