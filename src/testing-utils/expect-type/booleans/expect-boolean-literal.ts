/**
 * @file Returns true if a boolean literal (`true` or `false`) is passed.
 * Returns never if `boolean`, `true | false`, or anything else is passed to it.
 */

import type { IsAny } from '../../is-type/any-never-unknown/is-any';
import type { IsBooleanLiteral } from '../../is-type/booleans/is-boolean-literal';

/**
 * @description
 * Returns `true` only if one of the following values is passed to `TestedType`:
 * - `true`;
 * - `false`;
 *
 * Raises an error and returns `never` otherwise.
 * @template TestedType Raises an error if anything other than `true` OR `false` is passed into it...
 *
 * ... Unless it's `never` -- but we don't talk about it just yet.
 * @example
 * ```
 * type ExpectBooleanLiteral_True = ExpectBooleanLiteral<true>; // true
 * type ExpectBooleanLiteral_False = ExpectBooleanLiteral<false>; // true
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
> = IsBooleanLiteral<TestedType> extends true ? true : never;
