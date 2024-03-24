/**
 * @file Returns true if a boolean literal (`true` or `false`) is passed.
 * Returns never if `boolean`,  `true | false`, or anything else is passed to it.
 */

import type { IsAny } from '../../is-type/any-never-unknown/is-any';
import type { IsBooleanLiteral } from '../../is-type/booleans/is-boolean-literal';

/**
 * @description
 * Returns `true` only if one of the following values is passed to `TestedType`:
 * - `true`;
 * - `false`;
 *
 * Returns `false` otherwise.
 * @template TestedType Raises an error if anything other than `true` OR `false` is passed into it...
 *
 * ... Unless it's `never` -- but we don't talk about it just yet.
 * @example
 * ```
 * type ExpectBooleanLiteral_True = ExpectBooleanLiteral<true>; // true
 * type ExpectBooleanLiteral_False = ExpectBooleanLiteral<false>; // true
 *
 * // TS errors out on everything below:
 * type ExpectBooleanLiteral_Boolean = ExpectBooleanLiteral<boolean>; // false
 * type ExpectBooleanLiteral_TrueOrFalse = ExpectBooleanLiteral<true | false> // false
 *
 * type ExpectBooleanLiteral_Any = ExpectBooleanLiteral<any>; // false
 * type ExpectBooleanLiteral_Never = ExpectBooleanLiteral<never>; // false
 * type ExpectBooleanLiteral_Unknown = ExpectBooleanLiteral<unknown>; // false
 * type ExpectBooleanLiteral_String = ExpectBooleanLiteral<string>; // false
 * type ExpectBooleanLiteral_Number = ExpectBooleanLiteral<number>; // false
 * ```
 */
export type ExpectBooleanLiteral<
  TestedType extends IsAny<TestedType> extends true
    ? never
    : boolean extends TestedType
    ? never
    : boolean
> = IsBooleanLiteral<TestedType> extends true ? true : never;
