/**
 * @file Returns true if any, never or unknown is passed to it;
 * returns false otherwise.
 */

import type { IsAny } from './is-any';
import type { IsNever } from './is-never';
import type { IsUnknown } from './is-unknown';

/**
 * @description Returns `true` if one of the following values is passed:
 * - `any`
 * - `unknown`
 * - `never`
 * Returns `false` otherwise.
 * @template TestedType
 * @example
 * ```
 * type IsAnyOrNeverOrUnknown_Unknown = IsAnyOrNeverOrUnknown<unknown>; // true
 * type IsAnyOrNeverOrUnknown_Any = IsAnyOrNeverOrUnknown<any>; // true
 * type IsAnyOrNeverOrUnknown_Never = IsAnyOrNeverOrUnknown<never>; // true
 *
 * type IsAnyOrNeverOrUnknown_Boolean = IsAnyOrNeverOrUnknown<boolean>; // false
 * type IsAnyOrNeverOrUnknown_String = IsAnyOrNeverOrUnknown<string>; // false
 * type IsAnyOrNeverOrUnknown_Number = IsAnyOrNeverOrUnknown<number>; // false
 * ```
 */
export type IsAnyOrNeverOrUnknown<TestedType> = IsAny<TestedType> extends true
  ? true
  : IsUnknown<TestedType> extends true
  ? true
  : IsNever<TestedType> extends true
  ? true
  : false;
