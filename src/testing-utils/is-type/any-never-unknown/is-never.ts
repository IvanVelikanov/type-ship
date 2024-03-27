/**
 * @file Returns true only if `never` is passed; false otherwise.
 */

import type { IsAny } from './is-any';

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { IsAnyOrNeverOrUnknown } from './is-any-or-never-or-unknown';
import type { IsNotNever } from '../../is-not-type/any-never-unknown/is-not-never';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IsNever should come before this codeblock. */

/**
 * @template TestedType Any type can be passed to this generic.
 * @description Internal helper for the {@link IsNever} type.
 * @example @see
 * See examples for {@link IsNever}.
 * @see
 * Types used under the hood:
 * IsType: {@link IsAny}.
 */
type IsNeverHelper<TestedType> =
  // `any` needs to be excluded early on.
  IsAny<TestedType> extends true
    ? false
    : // The only thing that can extends `never` is `never`.
    // The exception is `any`, which results in `boolean`
    // but that was already excluded above.
    TestedType extends never
    ? true
    : false;

/**
 * @template TestedType Any type can be passed to this generic.
 * @description
 * Returns `true` **only** if `never` is passed to `TestedType`; `false` otherwise.
 *
 * Opposite of {@link IsNotNever}.
 * @example
 * ```
 * type IsNever_Never = IsNever<never>; // true
 *
 * type IsNever_Any = IsNever<any>; // false
 * type IsNever_Unknown = IsNever<unknown>; // false
 * type IsNever_String = IsNever<string>; // false
 * type IsNever_Number = IsNever<number>; // false
 * ```
 * @see
 * Types used under the hood:
 * - Internal: {@link IsNeverHelper}
 * @see
 * Used internally in:
 * - IsType: {@link IsAnyOrNeverOrUnknown}
 */
export type IsNever<TestedType> = IsNeverHelper<TestedType> extends never
  ? true
  : false;
