/**
 * @file Returns true if any of the following types are passed to it:
 * boolean, true | false, true, false.
 * Returns false otherwise.
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { IsBooleanBroad } from './is-boolean-broad';
import type { IsBooleanLiteral } from './is-boolean-literal';
import type { IsTrue } from './is-true';
import type { IsFalse } from './is-false';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IsBoolean should come after this line. */

import type { IsAnyOrNeverOrUnknown } from '../any-never-unknown/is-any-or-never-or-unknown';

/**
 * @template TestedType
 * @description
 * Returns `true` if one of the following values is passed to `TestedType`:
 * - `boolean`
 * - `true | false`
 * - `true`
 * - `false`
 *
 * Returns `false` otherwise.
 *
 * This is the broadest is-boolean type. For narrower variations, see: {@link IsBooleanBroad}, {@link IsBooleanLiteral}, {@link IsTrue}, {@link IsFalse}.
 * @example
 * ```
 * // Broad boolean type results in true:
 * type IsBoolean_Boolean = IsBoolean<boolean>; // true
 * type IsBoolean_TrueOrFalse = IsBoolean<true | false> // true
 * // Boolean literals also return true:
 * type IsBoolean_True = IsBoolean<true>; // true
 * type IsBoolean_False = IsBoolean<false>; // true
 *
 * // Everything else returns false:
 * type IsBoolean_Any = IsBoolean<any>; // false
 * type IsBoolean_Never = IsBoolean<never>; // false
 * type IsBoolean_Unknown = IsBoolean<unknown>; // false
 * type IsBoolean_String = IsBoolean<string>; // false
 * type IsBoolean_Number = IsBoolean<number>; // false
 * ```
 * @see
 * Types used under the hood:
 * IsType: {@link IsAnyOrNeverOrUnknown}.
 */
export type IsBoolean<TestedType> =
  // Necessary to test for `any`, `never`, and `unknown` early on.
  IsAnyOrNeverOrUnknown<TestedType> extends true
    ? false
    : // Both broad and literal boolean types satisfy the condition below.
    TestedType extends boolean
    ? true
    : false;
