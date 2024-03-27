/**
 * @file If-Else conditional that tests for `never`.
 */

import type { If } from '../../if-type/if/if';

import type { IsNotNever } from '../../is-not-type/any-never-unknown/is-not-never';

/**
 * @description If-Else conditional that tests for `never`.
 * @template TestedType
 * @template IfTrue
 * @template IfFalse
 * @example
 * ```
 * type TestIfNotNever_String = IfNotNever<'a string', 1, 42> // 1
 * type TestIfNotNever_Never = IfNotNever<never, 1, 42> // 42
 * ```
 */
export type IfNotNever<TestedType, IfTrue = true, IfFalse = false> = If<
  IsNotNever<TestedType>,
  IfTrue,
  IfFalse
>;
