/**
 * @file Returns true if a boolean literal (`true` OR `false`) is passed to it.
 * Returns false if `boolean`, `true | false`, or anything else is passed to it.
 */

import type { IsTrue } from './is-true';
import type { IsFalse } from './is-false';

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { IsBoolean } from './is-boolean';
import type { IsBooleanBroad } from './is-boolean-broad';

import type { IfBooleanLiteral } from '../../if-type/booleans/if-boolean-literal';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IsBooleanLiteral should come after this line. */

/* eslint-disable jsdoc/require-description-complete-sentence -- No idea why I get this error on the @todo tag. Will fix it later.*/
/**
 * @template TestedType
 * @description
 * Returns `true` only if one of the following values is passed to `TestedType`:
 * - `true`;
 * - `false`;
 *
 * Returns `false` otherwise.
 *
 * Broader variation: {@link IsBoolean}.
 *
 * Narrower variations: {@link IsTrue}, {@link IsFalse}.
 *
 * Counterpart: {@link IsBooleanBroad}.
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
 * @todo
 * **Issue #1:**
 *
 * Up until version 0.18.0, the implementation of this type looked like this:
 * ```
 * IsBooleanLiteral<TestedType> =
 *   IsAnyOrNeverOrUnknown<TestedType> extends true
 *    ? false
 *    : boolean extends TestedType
 *    ? false
 *    : TestedType extends true
 *    ? true
 *    : TestedType extends false
 *    ? true
 *    : false;
 * ```
 * However, that resulted in {@link https://github.com/microsoft/TypeScript/issues/51011 TS 2313 Circular Constraint Error}.
 * Investigate later.
 * @see
 * Types used under the hood:
 * - IsType: {@link IsTrue}, {@link @IsFalse}
 * @see
 * Used internally in:
 * - IfType: {@link IfBooleanLiteral}
 */
export type IsBooleanLiteral<TestedType> = IsTrue<TestedType> extends true
  ? true
  : IsFalse<TestedType> extends true
  ? true
  : false;
/* eslint-enable jsdoc/require-description-complete-sentence -- No idea why I get this error on the @todo tag. Will fix it later.*/
