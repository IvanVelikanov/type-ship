/**
 * @file Returns the passed boolean literal if a boolean literal (`true` or `false`) is passed.
 * Returns never if `boolean`, `true | false`, or anything else is passed to it.
 */

import type { IsAny } from '../../is-type/any-never-unknown/is-any';
import type { IsBooleanLiteral } from '../../is-type/booleans/is-boolean-literal';

/**
 * @description
 * Returns the boolean type *that was passed into* `TestedType` if the passed value is one of the following:
 * - `true`
 * - `false`
 *
 * Raises an error and returns `never` otherwise.
 * @template TestedType Raises an error if anything other than `true` OR `false` is passed into it...
 *
 * ...Unless it's `never` -- but we don't talk about it just yet.
 * @example
 * ```
 * type ExpectBooleanLiteral_True = ExpectBooleanLiteral<true>; // true
 * type ExpectBooleanLiteral_False = ExpectBooleanLiteral<false>; // false
 *
 * // TS errors out on everything below:
 * type ExpectBooleanLiteral_Boolean = ExpectBooleanLiteral<boolean>; // never
 * type ExpectBooleanLiteral_TrueOrFalse = ExpectBooleanLiteral<true | false> // never
 *
 * type ExpectBooleanLiteral_Any = ExpectBooleanLiteral<any>; // never
 * type ExpectBooleanLiteral_Never = ExpectBooleanLiteral<never>; // never
 * type ExpectBooleanLiteral_Unknown = ExpectBooleanLiteral<unknown>; // never
 * type ExpectBooleanLiteral_String = ExpectBooleanLiteral<string>; // never
 * type ExpectBooleanLiteral_Number = ExpectBooleanLiteral<number>; // never
 * ```
 */
export type ExpectBooleanLiteral<
  TestedType extends IsAny<TestedType> extends true
    ? never
    : boolean extends TestedType
    ? never
    : boolean
> = IsBooleanLiteral<TestedType> extends true ? TestedType : never;
