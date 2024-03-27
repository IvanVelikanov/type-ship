/**
 * @file Returns true if any, never or unknown is passed to it.
 * Returns false otherwise.
 */

import type { IsAny } from './is-any';
import type { IsNever } from './is-never';
import type { IsUnknown } from './is-unknown';

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { IsBoolean } from '../booleans/is-boolean';
import type { IsBooleanBroad } from '../booleans/is-boolean-broad';
import type { IsBooleanLiteral } from '../booleans/is-boolean-literal';
import type { IsTrue } from '../booleans/is-true';
import type { IsFalse } from '../booleans/is-false';

import type { IsNotAnyOrNeverOrUnknown } from '../../is-not-type/any-never-unknown/is-not-any-or-never-or-unknown';
import type { IfAnyOrNeverOrUnknown } from '../../if-type/any-never-unknown/if-any-or-never-or-unknown';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IsNotAnyOrNeverOrUnknown should come before this codeblock. */

/* eslint-disable jsdoc/check-indentation -- This type is used a lot in other types, thus the contents of the final @see tag will need to be indented to make it digestible */
/**
 * @template TestedType Any type can be passed to this generic.
 * @description Returns `true` if one of the following values is passed to `TestedType`:
 * - `any`
 * - `unknown`
 * - `never`
 *
 * Returns `false` otherwise.
 *
 * Opposite of {@link IsNotAnyOrNeverOrUnknown}.
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
 * @see
 * Types used under the hood:
 * - IsType: {@link IsAny}, {@link IsNever}, {@link IsUnknown}.
 * @see
 * Used internally in:
 * - IsType:
 *   - booleans: {@link IsBoolean}, {@link IsBooleanBroad}, {@link IsBooleanLiteral}, {@link IsTrue}, {@link IsFalse}.
 * - IfType: {@link IfAnyOrNeverOrUnknown}
 */
export type IsAnyOrNeverOrUnknown<TestedType> = IsAny<TestedType> extends true
  ? true
  : IsUnknown<TestedType> extends true
  ? true
  : IsNever<TestedType> extends true
  ? true
  : false;
/* eslint-enable jsdoc/check-indentation -- This type is used a lot in other types, thus the contents of the final @see tag will need to be indented to make it digestible */
