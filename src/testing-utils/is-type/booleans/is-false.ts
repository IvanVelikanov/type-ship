/**
 * @file Returns true only if `false` is passed; false otherwise.
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { IsBoolean } from './is-boolean';
import type { IsBooleanBroad } from './is-boolean-broad';
import type { IsBooleanLiteral } from './is-boolean-literal';
import type { IsTrue } from './is-true';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IsFalse should come after this line. */

import type { IsAnyOrNeverOrUnknown } from '../any-never-unknown/is-any-or-never-or-unknown';

/**
 * @template TestedType
 * @description
 * Returns `true` **only** if `false` is passed to `TestedType`.
 *
 * Returns `false` otherwise.
 *
 * Broader variations: {@link IsBoolean}, {@link IsBooleanLiteral}, {@link IsBooleanBroad}.
 *
 * Counterpart: {@link IsTrue}.
 * @example
 * ```
 * type IsFalse_False = IsFalse<false>; // true
 *
 * type IsFalse_True = IsFalse<true>; // false
 * type IsFalse_Boolean = IsFalse<boolean>; // false
 * type IsFalse_Any = IsFalse<any>; // false
 * type IsFalse_Never = IsFalse<never>; // false
 * type IsFalse_Unknown = IsFalse<unknown>; // false
 * type IsFalse_String = IsFalse<string>; // false
 * type IsFalse_Number = IsFalse<number>; // false
 * ```
 * @see
 * Types used under the hood:
 * IsType: {@link IsAnyOrNeverOrUnknown}.
 */
export type IsFalse<TestedType> =
  // Necessary to test for `any`, `never`, and `unknown` early on.
  IsAnyOrNeverOrUnknown<TestedType> extends true
    ? false
    : // Without the line below, passing the broad `boolean` type to `TestedType` generic
    // results in `boolean`. Not `true` OR `false` -- exactly `boolean.`
    true extends TestedType
    ? false
    : TestedType extends false
    ? true
    : false;
