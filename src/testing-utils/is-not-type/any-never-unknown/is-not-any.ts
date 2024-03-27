/**
 * @file Returns false only if `any` is passed; true otherwise.
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { IsNotAnyOrNeverOrUnknown } from './is-not-any-or-never-or-unknown';
import type { IsNotNever } from './is-not-never';
import type { IsNotUnknown } from './is-not-unknown';

import type { IsAny } from '../../is-type/any-never-unknown/is-any';
import type { IfNotAny } from '../../if-not-type/any-never-unknown/if-not-any';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IsNotAny should come before this codeblock. */

/**
 * @template TestedType Any type can be passed to this generic.
 * @description
 * Returns `false` **only** if `any` is passed to `TestedType`; `true` otherwise.
 *
 * Opposite of {@link IsAny}.
 * @example
 * ```
 * type IsNotAny_Any = IsNotAny<any>; // false
 *
 * type IsNotAny_Never = IsNotAny<never>; // true
 * type IsNotAny_Unknown = IsNotAny<unknown>; // true
 * type IsNotAny_String = IsNotAny<string>; // true
 * type IsNotAny_Number = IsNotAny<number>; // true
 * ```
 * @see
 * Used internally in:
 * - IsNotType: {@link IsNotAnyOrNeverOrUnknown}, {@link IsNotNever}, {@link IsNotUnknown}
 * - IfNotType: {@link IfNotAny}
 */
export type IsNotAny<TestedType> = 'something' extends number & TestedType
  ? false
  : true;
