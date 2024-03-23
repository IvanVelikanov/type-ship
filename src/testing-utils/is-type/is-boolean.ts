/**
 * @file Returns true if any of the following types are passed to it:
 * boolean, true | false, true, false.
 * Returns false otherwise.
 */

import type { IsAny } from './is-any';
import type { IsNever } from './is-never';

/**
 * @template TestedType
 * @description
 * Returns `true` if one of the following values is passed to `TestedType`:
 * - `boolean`;
 * - `true | false`;
 * - `true`;
 * - `false`.
 *
 * Returns `false` otherwise.
 * @example
 * ```
 * type IsBoolean_Boolean = IsBoolean<boolean>; // true
 * type IsBoolean_TrueOrFalse = IsBoolean<true | false> // true
 * type IsBoolean_True = IsBoolean<true>; // true
 * type IsBoolean_False = IsBoolean<false>; // true
 *
 * type IsBoolean_Any = IsBoolean<any>; // false
 * type IsBoolean_Never = IsBoolean<never>; // false
 * type IsBoolean_Unknown = IsBoolean<unknown>; // false
 * type IsBoolean_String = IsBoolean<string>; // false
 * type IsBoolean_Number = IsBoolean<number>; // false
 * ```
 */
export type IsBoolean<TestedType> = IsAny<TestedType> extends true
  ? false
  : IsNever<TestedType> extends true
  ? false
  : TestedType extends boolean
  ? true
  : false;
