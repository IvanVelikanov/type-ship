/**
 * @file Returns false only if `never` is passed; true otherwise.
 */

import type { IsNotAny } from './is-not-any';

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { IsNotAnyOrNeverOrUnknown } from './is-not-any-or-never-or-unknown';
import type { IsNever } from '../../is-type/any-never-unknown/is-never';
import type { IfNotNever } from '../../if-not-type/any-never-unknown/if-not-never';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IsNotNever should come before this codeblock. */

/**
 * @template TestedType Any type can be passed to this generic.
 * @description Internal helper for the {@link IsNotNever} type.
 * @example @see
 * See examples for {@link IsNotNever}.
 * @see
 * Types used under the hood:
 * IsNotType: {@link IsNotAny}.
 */
type IsNotNeverHelper<TestedType> =
  // `any` needs to be excluded early on.
  IsNotAny<TestedType> extends false
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
 * Returns `false` **only** if `never` is passed to `TestedType`; `true` otherwise.
 *
 * Opposite of {@link IsNever}.
 * @example
 * ```
 * type IsNotNever_Never = IsNotNever<never>; // false
 *
 * type IsNotNever_Any = IsNotNever<any>; // true
 * type IsNotNever_Unknown = IsNotNever<unknown>; // true
 * type IsNotNever_String = IsNotNever<string>; // true
 * type IsNotNever_Number = IsNotNever<number>; // true
 * ```
 * @see
 * Types used under the hood:
 * - Internal: {@link IsNotNeverHelper}
 * @see
 * Used internally in:
 * - IsNotType: {@link IsNotAnyOrNeverOrUnknown}
 * - IfNotType: {@link IfNotNever}
 */
export type IsNotNever<TestedType> = IsNotNeverHelper<TestedType> extends never
  ? false
  : true;
