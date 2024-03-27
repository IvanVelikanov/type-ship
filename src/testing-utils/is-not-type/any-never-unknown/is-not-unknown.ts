/**
 * @file Returns false only if `unknown` is passed; true otherwise.
 */

import type { IsNotAny } from './is-not-any';

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { IsNotAnyOrNeverOrUnknown } from './is-not-any-or-never-or-unknown';
import type { IsUnknown } from '../../is-type/any-never-unknown/is-unknown';
import type { IfNotUnknown } from '../../if-not-type/any-never-unknown/if-not-unknown';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IsNotUnknown should come before this codeblock. */

/**
 * @template TestedType
 * @description
 * Returns `false` **only** if `unknown` is passed; `true` otherwise.
 *
 * Opposide of {@link IsUnknown}.
 * @example
 * ```
 * type IsNotUnknown_Unknown = IsNotUnknown<unknown>; // false
 *
 * type IsNotUnknown_Any = IsNotUnknown<any>; // true
 * type IsNotUnknown_Never = IsNotUnknown<never>; // true
 * type IsNotUnknown_Boolean = IsNotUnknown<boolean>; // true
 * type IsNotUnknown_String = IsNotUnknown<string>; // true
 * type IsNotUnknown_Number = IsNotUnknown<number>; // true
 * ```
 * @see
 * Types used under the hood:
 * - IsNotType: {@link IsNotAny}.
 * @see
 * Used internally in:
 * - IsNotType: {@link IsNotAnyOrNeverOrUnknown}
 * - IfNotType: {@link IfNotUnknown}
 */
export type IsNotUnknown<TestedType> =
  // `any` needs to be taken into account early on.
  // Return `true` if `TestedType` is `any`.
  IsNotAny<TestedType> extends false
    ? true
    : // `unknown` can only extends `unknown` and `any` which was already excluded above.
    // Return `false` if TestedType is `unknown`.
    unknown extends TestedType
    ? false
    : // Return `true` otherwise.
      true;
