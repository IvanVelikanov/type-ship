/**
 * @file Returns false if any, never or unknown is passed to it;
 * returns true otherwise.
 */

import type { IsNotAny } from './is-not-any';
import type { IsNotNever } from './is-not-never';
import type { IsNotUnknown } from './is-not-unknown';

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { IsAnyOrNeverOrUnknown } from '../../is-type/any-never-unknown/is-any-or-never-or-unknown';
import type { IfAnyOrNeverOrUnknown } from '../../if-type/any-never-unknown/if-any-or-never-or-unknown';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IsNotAnyOrNeverOrUnknown should come before this codeblock. */

/**
 * @template TestedType Any type can be passed to this generic.
 * @description
 * Returns `false` if one of the following values is passed to `TestedType`:
 * - `any`
 * - `unknown`
 * - `never`
 *
 * Returns `true` otherwise.
 *
 * Opposite of {@link IsAnyOrNeverOrUnknown}.
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
 * @see
 * Types used under the hood:
 * - IsNotType: {@link IsNotAny}, {@link IsNotNever}, {@link IsNotUnknown}
 * @see
 * Used internally in:
 * - IfNotType: {@link IfAnyOrNeverOrUnknown}
 */
export type IsNotAnyOrNeverOrUnknown<TestedType> =
  IsNotAny<TestedType> extends false
    ? false
    : IsNotUnknown<TestedType> extends false
    ? false
    : IsNotNever<TestedType> extends false
    ? false
    : true;
