/**
 * @file If-Else conditional that tests for `never`, `any` and `unknown`.
 */

import type { If } from '../../if-type/if/if';

import type { IsNotAnyOrNeverOrUnknown } from '../../is-not-type/any-never-unknown/is-not-any-or-never-or-unknown';

/**
 * @description If-Else conditional that tests for `never`, `any` and `unknown`.
 * @template TestedType Any type can be passed to this generic.
 * @template IfTrue The resulting type if `TestedType` is NOT `any`, `never` or `unknown`. Default: `true`.
 * @template IfFalse The resulting type if `TestedType` is `any`, `never` or `unknown`. Default: `false`.
 * @example
 * ```
 * type TestIfNotAnyOrNeverOrUnknown_String = IfNotAnyOrNeverOrUnknown<'a string', 1, 42> // 1
 *
 * type TestIfNotAnyOrNeverOrUnknown_Any = IfNotAnyOrNeverOrUnknown<any, 1, 42> // 42
 * type TestIfNotAnyOrNeverOrUnknown_Never = IfNotAnyOrNeverOrUnknown<never, 1, 42> // 42
 * type TestIfNotAnyOrNeverOrUnknown_Unknown = IfNotAnyOrNeverOrUnknown<unknown, 1, 42> // 42
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link If}
 * - IsNotType: {@link IsNotAnyOrNeverOrUnknown}
 */
export type IfNotAnyOrNeverOrUnknown<
  TestedType,
  IfTrue = true,
  IfFalse = false
> = If<IsNotAnyOrNeverOrUnknown<TestedType>, IfTrue, IfFalse>;
