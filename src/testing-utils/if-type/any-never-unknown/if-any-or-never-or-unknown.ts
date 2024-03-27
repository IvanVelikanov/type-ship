/**
 * @file If-Else conditional that tests for `never`, `any` and `unknown`.
 */

import type { If } from '../if/if';

import type { IsAnyOrNeverOrUnknown } from '../../is-type/any-never-unknown/is-any-or-never-or-unknown';

/**
 * @description If-Else conditional that tests for `never`, `any` and `unknown`.
 * @template TestedType Any type can be passed to this generic.
 * @template IfTrue The resulting type if `TestedType` is `any`, `never` or `unknown`. Default: `true`.
 * @template IfFalse The resulting type if `TestedType` is NOT `any`, `never` or `unknown`. Default: `false`.
 * @example
 * ```
 * type TestIfAnyOrNeverOrUnknown_String = IfAnyOrNeverOrUnknown<'a string', 1, 42> // 42
 *
 * type TestIfAnyOrNeverOrUnknown_Any = IfAnyOrNeverOrUnknown<any, 1, 42> // 1
 * type TestIfAnyOrNeverOrUnknown_Never = IfAnyOrNeverOrUnknown<never, 1, 42> // 1
 * type TestIfAnyOrNeverOrUnknown_Unknown = IfAnyOrNeverOrUnknown<unknown, 1, 42> // 1
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link If}
 * - IsType: {@link IsAnyOrNeverOrUnknown}
 */
export type IfAnyOrNeverOrUnknown<
  TestedType,
  IfTrue = true,
  IfFalse = false
> = If<IsAnyOrNeverOrUnknown<TestedType>, IfTrue, IfFalse>;
