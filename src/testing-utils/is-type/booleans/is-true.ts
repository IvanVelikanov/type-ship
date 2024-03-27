/**
 * @file Returns true only if `true` is passed; false otherwise.
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { IsBoolean } from './is-boolean';
import type { IsBooleanBroad } from './is-boolean-broad';
import type { IsBooleanLiteral } from './is-boolean-literal';
import type { IsFalse } from './is-false';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IsTrue should come after this line. */

import type { IsAnyOrNeverOrUnknown } from '../any-never-unknown/is-any-or-never-or-unknown';

/**
 * @template TestedType
 * @description
 * Returns `true` **only** if `true` is passed to `TestedType`.
 *
 * Returns `false` otherwise.
 *
 * Broader variations: {@link IsBoolean}, {@link IsBooleanLiteral}, {@link IsBooleanBroad}.
 *
 * Counterpart: {@link IsFalse}.
 * @example
 * ```
 * type IsTrue_True = IsTrue<true>; // true
 *
 * type IsTrue_Boolean = IsTrue<boolean>; // false
 * type IsTrue_False = IsTrue<false>; // false
 * type IsTrue_Any = IsTrue<any>; // false
 * type IsTrue_Never = IsTrue<never>; // false
 * type IsTrue_Unknown = IsTrue<unknown>; // false
 * type IsTrue_String = IsTrue<string>; // false
 * type IsTrue_Number = IsTrue<number>; // false
 * ```
 * @see
 * Types used under the hood:
 * IsType: {@link IsAnyOrNeverOrUnknown}.
 */
export type IsTrue<TestedType> =
  // Necessary to test for `any`, `never`, and `unknown` early on.
  IsAnyOrNeverOrUnknown<TestedType> extends true
    ? false
    : // Without the line below, passing the broad `boolean` type to `TestedType` generic
    // results in `boolean`. Not `true` OR `false` -- exactly `boolean.`
    false extends TestedType
    ? false
    : TestedType extends true
    ? true
    : false;
