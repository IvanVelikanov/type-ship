/**
 * @file Returns false if any, never or unknown is passed to it;
 * returns true otherwise.
 */

import type { IsNotAny } from './is-not-any';
import type { IsNotNever } from './is-not-never';
import type { IsNotUnknown } from './is-not-unknown';

/**
 * @description Returns `false` if one of the following values is passed:
 * - `any`
 * - `unknown`
 * - `never`
 * Returns `true` otherwise.
 * @template TestedType
 * @example
 * ```
 * type IsNotAnyOrNeverOrUnknown_Unknown = IsNotAnyOrNeverOrUnknown<unknown>; // false
 * type IsNotAnyOrNeverOrUnknown_Any = IsNotAnyOrNeverOrUnknown<any>; // false
 * type IsNotAnyOrNeverOrUnknown_Never = IsNotAnyOrNeverOrUnknown<never>; // false
 *
 * type IsNotAnyOrNeverOrUnknown_Boolean = IsNotAnyOrNeverOrUnknown<boolean>; // true
 * type IsNotAnyOrNeverOrUnknown_String = IsNotAnyOrNeverOrUnknown<string>; // true
 * type IsNotAnyOrNeverOrUnknown_Number = IsNotAnyOrNeverOrUnknown<number>; // true
 * ```
 */
export type IsNotAnyOrNeverOrUnknown<TestedType> =
  IsNotAny<TestedType> extends false
    ? false
    : IsNotUnknown<TestedType> extends false
    ? false
    : IsNotNever<TestedType> extends false
    ? false
    : true;
