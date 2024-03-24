/**
 * @file Returns true if `boolean` or `true | false` are passed to it.
 * Returns never if a boolean literal (`true` or `false`) or anything else is passed.
 */

import type { IsAny } from '../../is-type/any-never-unknown/is-any';
import type { IsTrue } from '../../is-type/booleans/is-true';
import type { IsFalse } from '../../is-type/booleans/is-false';
import type { IsBooleanBroad } from '../../is-type/booleans/is-boolean-broad';

/**
 * @description
 * Returns `true` only if one of the following values is passed to `TestedType`:
 * - `boolean`;
 * - `true | false`;
 *
 * Returns `false` otherwise.
 * @template TestedType Raises an error if anything other than `boolean` OR `true | false` is passed into it...
 *
 * ... Unless it's `never` -- but we don't talk about it just yet.
 * @example
 * ```
 * type ExpectBooleanBroad_Boolean = ExpectBooleanBroad<boolean>; // true
 * type ExpectBooleanBroad_TrueOrFalse = ExpectBooleanBroad<true | false> // true
 *
 * // TS errors out on everything below:
 * type ExpectBooleanBroad_True = ExpectBooleanBroad<true>; // false
 * type ExpectBooleanBroad_False = ExpectBooleanBroad<false>; // false
 *
 * type ExpectBooleanBroad_Any = ExpectBooleanBroad<any>; // false
 * type ExpectBooleanBroad_Never = ExpectBooleanBroad<never>; // false
 * type ExpectBooleanBroad_Unknown = ExpectBooleanBroad<unknown>; // false
 * type ExpectBooleanBroad_String = ExpectBooleanBroad<string>; // false
 * type ExpectBooleanBroad_Number = ExpectBooleanBroad<number>; // false
 * ```
 */
export type ExpectBooleanBroad<
  TestedType extends IsAny<TestedType> extends true
    ? never
    : IsTrue<TestedType> extends true
    ? never
    : IsFalse<TestedType> extends true
    ? never
    : boolean
> = IsBooleanBroad<TestedType> extends true ? true : never;
