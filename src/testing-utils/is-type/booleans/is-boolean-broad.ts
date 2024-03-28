/**
 * @file Returns true if `boolean` or `true | false` is passed to it.
 * Returns false if a boolean literal (`true` OR `false`) or anything else is passed.
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { IsBoolean } from './is-boolean';
import type { IsBooleanLiteral } from './is-boolean-literal';
import type { IsTrue } from './is-true';
import type { IsFalse } from './is-false';

import type { IfBooleanBroad } from '../../if-type/booleans/if-boolean-broad';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IsBooleanBroad should come after this line. */

import type { IsAnyOrNeverOrUnknown } from '../any-never-unknown/is-any-or-never-or-unknown';

/**
 * @template TestedType
 * @description
 * Returns `true` only if one of the following values is passed to `TestedType`:
 * - `boolean`
 * - `true | false`
 *
 * Returns `false` otherwise.
 *
 * Broader variation: {@link IsBoolean}.
 *
 * Narrower variations: {@link IsTrue}, {@link IsFalse}.
 *
 * Counterpart: {@link IsBooleanLiteral}.
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
 * @see
 * Types used under the hood:
 * - IsType: {@link IsAnyOrNeverOrUnknown}
 * @see
 * Used internally in:
 * - IfType: {@link IfBooleanBroad}
 */
export type IsBooleanBroad<TestedType> =
  // Necessary to test for `any`, `never`, and `unknown` early on.
  IsAnyOrNeverOrUnknown<TestedType> extends true
    ? false
    : // The only thing (other than `any` and `unknown`, which was already excluded above),
    // that type `boolean` extends is `boolean`.
    boolean extends TestedType
    ? true
    : false;
