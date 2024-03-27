/**
 * @file If-Else conditional that tests for `never`, `any` and `unknown`.
 */

import type { If } from '../../if-type/if/if';

import type { IsNotAnyOrNeverOrUnknown } from '../../is-not-type/any-never-unknown/is-not-any-or-never-or-unknown';

/**
 * @description If-Else conditional that tests for `never`, `any` and `unknown`.
 * @template TestedType
 * @template IfTrue
 * @template IfFalse
 * @example
 * ```
 * type TestIfNotAnyOrNeverOrUnknown_String = IfNotAnyOrNeverOrUnknown<'a string', 1, 42> // 1
 *
 * type TestIfNotAnyOrNeverOrUnknown_Any = IfNotAnyOrNeverOrUnknown<any, 1, 42> // 42
 * type TestIfNotAnyOrNeverOrUnknown_Never = IfNotAnyOrNeverOrUnknown<never, 1, 42> // 42
 * type TestIfNotAnyOrNeverOrUnknown_Unknown = IfNotAnyOrNeverOrUnknown<unknown, 1, 42> // 42
 * ```
 */
export type IfNotAnyOrNeverOrUnknown<
  TestedType,
  IfTrue = true,
  IfFalse = false
> = If<IsNotAnyOrNeverOrUnknown<TestedType>, IfTrue, IfFalse>;
