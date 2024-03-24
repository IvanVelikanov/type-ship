/**
 * @file Returns true if `boolean` or `true | false` are passed to it.
 * Returns false if a boolean literal (`true` or `false`) or anything else is passed.
 */

import type { IsAny } from '../any-never-unknown/is-any';
import type { IsNever } from '../any-never-unknown/is-never';
import type { IsUnknown } from '../any-never-unknown/is-unknown';

/**
 * @template TestedType
 * @description
 * Returns `true` only if one of the following values is passed to `TestedType`:
 * - `boolean`;
 * - `true | false`;
 *
 * Returns `false` otherwise.
 * @example
 * ```
 * // Only the broad boolean type (or its alias true | false) will return true:
 * type IsBooleanBroad_Boolean = IsBooleanBroad<boolean>; // true
 * type IsBooleanBroad_TrueOrFalse = IsBooleanBroad<true | false> // true
 *
 * // Boolean literals (true OR false) will yield false:
 * type IsBooleanBroad_True = IsBooleanBroad<true>; // false
 * type IsBooleanBroad_False = IsBooleanBroad<false>; // false
 *
 * // Everything else will result in false as well:
 * type IsBooleanBroad_Any = IsBooleanBroad<any>; // false
 * type IsBooleanBroad_Never = IsBooleanBroad<never>; // false
 * type IsBooleanBroad_Unknown = IsBooleanBroad<unknown>; // false
 * type IsBooleanBroad_String = IsBooleanBroad<string>; // false
 * type IsBooleanBroad_Number = IsBooleanBroad<number>; // false
 * ```
 */
export type IsBooleanBroad<TestedType> = IsAny<TestedType> extends true
  ? false
  : IsNever<TestedType> extends true
  ? false
  : IsUnknown<TestedType> extends true
  ? false
  : boolean extends TestedType
  ? true
  : TestedType extends true
  ? false
  : TestedType extends false
  ? false
  : false;
