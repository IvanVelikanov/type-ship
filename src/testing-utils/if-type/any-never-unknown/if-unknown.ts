/**
 * @file If-Else conditional that tests for `unknown`.
 */

import type { If } from '../if/if';

import type { IsUnknown } from '../../is-type/any-never-unknown/is-unknown';

/**
 * @description If-Else conditional that tests for `unknown`.
 * @template TestedType
 * @template IfTrue
 * @template IfFalse
 * @example
 * ```
 * type TestIfUnknown_String = IfUnknown<'a string', 1, 42> // 42
 * type TestIfUnknown_unknown = IfUnknown<unknown, 1, 42> // 1
 * ```
 */
export type IfUnknown<TestedType, IfTrue = true, IfFalse = false> = If<
  IsUnknown<TestedType>,
  IfTrue,
  IfFalse
>;
