/**
 * @file If-Else conditional that tests for `never`.
 */

import type { If } from '../if/if';

import type { IsNever } from '../../is-type/any-never-unknown/is-never';

/**
 * @description If-Else conditional that tests for `never`.
 * @template TestedType
 * @template IfTrue
 * @template IfFalse
 * @example
 * ```
 * type TestIfNever_String = IfNever<'a string', 1, 42> // 42
 * type TestIfNever_Never = IfNever<never, 1, 42> // 1
 * ```
 */
export type IfNever<TestedType, IfTrue = true, IfFalse = false> = If<
  IsNever<TestedType>,
  IfTrue,
  IfFalse
>;
