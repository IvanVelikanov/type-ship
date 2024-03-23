/**
 * @file Returns true if a boolean literal (`true` or `false`) is passed to it.
 * Returns false if `boolean`, `true | false`, or anything else is passed to it.
 */

import type { IsAny } from './is-any';
import type { IsNever } from './is-never';
import type { IsUnknown } from './is-unknown';

/**
 * @template TestedType
 * @description
 * Returns `true` only if one of the following values is passed to `TestedType`:
 * - `true`;
 * - `false`;
 *
 * Returns `false` otherwise.
 * @example
 * ```
 * // Only boolean literals (true OR false) will return true:
 * type IsBooleanLiteral_True = IsBooleanLiteral<true>; // true
 * type IsBooleanLiteral_False = IsBooleanLiteral<false>; // true
 *
 * // The broad boolean type (or its alias true | false) will return false:
 * type IsBooleanLiteral_Boolean = IsBooleanLiteral<boolean>; // false
 * type IsBooleanLiteral_TrueOrFalse = IsBooleanLiteral<true | false> // false
 *
 * // Everything else will result in false as well:
 * type IsBooleanLiteral_Any = IsBooleanLiteral<any>; // false
 * type IsBooleanLiteral_Never = IsBooleanLiteral<never>; // false
 * type IsBooleanLiteral_Unknown = IsBooleanLiteral<unknown>; // false
 * type IsBooleanLiteral_String = IsBooleanLiteral<string>; // false
 * type IsBooleanLiteral_Number = IsBooleanLiteral<number>; // false
 * ```
 */
export type IsBooleanLiteral<TestedType> = IsAny<TestedType> extends true
  ? false
  : IsNever<TestedType> extends true
  ? false
  : IsUnknown<TestedType> extends true
  ? false
  : boolean extends TestedType
  ? false
  : TestedType extends true
  ? true
  : TestedType extends false
  ? true
  : false;
