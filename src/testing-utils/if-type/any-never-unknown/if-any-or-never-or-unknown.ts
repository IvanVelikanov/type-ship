/**
 * @file If-Else conditional that tests for `never`, `any` and `unknown`.
 */

import type { If } from '../if/if';

import type { IsAnyOrNeverOrUnknown } from '../../is-type/any-never-unknown/is-any-or-never-or-unknown';

/**
 * @description If-Else conditional that tests for `never`, `any` and `unknown`.
 * @template TestedType
 * @template IfTrue
 * @template IfFalse
 * @example
 * ```
 * type TestIfAnyOrNeverOrUnknown_String = IfAnyOrNeverOrUnknown<'a string', 1, 42> // 42
 *
 * type TestIfAnyOrNeverOrUnknown_Any = IfAnyOrNeverOrUnknown<any, 1, 42> // 1
 * type TestIfAnyOrNeverOrUnknown_Never = IfAnyOrNeverOrUnknown<never, 1, 42> // 1
 * type TestIfAnyOrNeverOrUnknown_Unknown = IfAnyOrNeverOrUnknown<unknown, 1, 42> // 1
 * ```
 */
export type IfAnyOrNeverOrUnknown<
  TestedType,
  IfTrue = true,
  IfFalse = false
> = If<IsAnyOrNeverOrUnknown<TestedType>, IfTrue, IfFalse>;
