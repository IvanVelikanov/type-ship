/**
 * @file Returns true only if `any` is passed; false otherwise.
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { IsAnyOrNeverOrUnknown } from './is-any-or-never-or-unknown';
import type { IsNever } from './is-never';
import type { IsUnknown } from './is-unknown';

import type { IsNotAny } from '../../is-not-type/any-never-unknown/is-not-any';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IsNotAny should come before this codeblock. */

/**
 * @template TestedType Any type can be passed to this generic.
 * @description
 * Returns `true` **only** if `any` is passed to `TestedType`; `false` otherwise.
 *
 * Opposite of {@link IsNotAny}.
 * @example
 * ```
 * type IsAny_Any = IsAny<any>; // true
 *
 * type IsAny_Never = IsAny<never>; // false
 * type IsAny_Unknown = IsAny<unknown>; // false
 * type IsAny_String = IsAny<string>; // false
 * type IsAny_Number = IsAny<number>; // false
 * ```
 * @see
 * Used internally in:
 * - IsType: {@link IsAnyOrNeverOrUnknown}, {@link IsNever}, {@link IsUnknown}
 */
export type IsAny<TestedType> = 'something' extends number & TestedType
  ? true
  : false;
