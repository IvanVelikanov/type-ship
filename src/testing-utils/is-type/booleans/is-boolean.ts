/**
 * @file Returns true if any of the following types are passed to it:
 * boolean, true | false, true, false.
 * Returns false otherwise.
 */

import type { IsBooleanBroad } from './is-boolean-broad';
import type { IsBooleanLiteral } from './is-boolean-literal';

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { IsTrue } from './is-true';
import type { IsFalse } from './is-false';

import type { IfBoolean } from '../../if-type/booleans/if-boolean';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IsBoolean should come after this line. */

/* eslint-disable jsdoc/require-description-complete-sentence -- No idea why I get this error on the @todo tag. Will fix it later.*/
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
 * @todo
 * **Issue #1:**
 *
 * Up until version 0.18.0, the implementation of this type looked like this:
 * ```
 * export type IsBoolean<TestedType> =
 *   // Necessary to test for `any`, `never`, and `unknown` early on.
 *   IsAnyOrNeverOrUnknown<TestedType> extends true
 *     ? false
 *     : // Both broad and literal boolean types satisfy the condition below.
 *     TestedType extends boolean
 *     ? true
 *     : false;
 * ```
 * However, that resulted in {@link https://github.com/microsoft/TypeScript/issues/51011 TS 2313 Circular Constraint Error}.
 * Investigate later.
 * @see
 * Types used under the hood:
 * IsType: {@link IsBooleanBroad}, {@link IsBooleanLiteral}
 * @see
 * Used internally in:
 * - ExpectType: {@link IfBoolean}
 */
export type IsBoolean<TestedType> = IsBooleanBroad<TestedType> extends true
  ? true
  : IsBooleanLiteral<TestedType> extends true
  ? true
  : false;
/* eslint-enable jsdoc/require-description-complete-sentence -- No idea why I get this error on the @todo tag. Will fix it later.*/
