/**
 * @file Returns true only if `unknown` is passed; false otherwise.
 */

import type { IsAny } from './is-any';

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { IsAnyOrNeverOrUnknown } from './is-any-or-never-or-unknown';
import type { IsNotUnknown } from '../../is-not-type/any-never-unknown/is-not-unknown';
import type { IfUnknown } from '../../if-type/any-never-unknown/if-unknown';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IsUnknown should come before this codeblock. */

/**
 * @template TestedType Any type can be passed to this generic.
 * @description
 * Returns `true` **only** if `unknown` is passed to `TestedType`; `false` otherwise.
 *
 * Opposite of {@link IsNotUnknown}.
 * @example
 * ```
 * type IsUnknown_Unknown = IsUnknown<unknown>; // true
 *
 * type IsUnknown_Any = IsUnknown<any>; // false
 * type IsUnknown_Never = IsUnknown<never>; // false
 * type IsUnknown_Boolean = IsUnknown<boolean>; // false
 * type IsUnknown_String = IsUnknown<string>; // false
 * type IsUnknown_Number = IsUnknown<number>; // false
 * ```
 * @see
 * Types used under the hood:
 * - IsType: {@link IsAny}
 * @see
 * Used internally in:
 * - IsType: {@link IsAnyOrNeverOrUnknown}
 * - IfType: {@link IfUnknown}
 */
export type IsUnknown<TestedType> =
  // `any` needs to be excluded early on.
  IsAny<TestedType> extends true
    ? false
    : // `unknown` can only extends `unknown` and `any` which was already excluded above.
    unknown extends TestedType
    ? true
    : false;
