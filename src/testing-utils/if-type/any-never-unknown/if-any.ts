/**
 * @file If-Else conditional that tests for `any`.
 */

import type { If } from '../if/if';

import type { IsAny } from '../../is-type/any-never-unknown/is-any';

/**
 * @description If-Else conditional that tests for `any`.
 * @template TestedType
 * @template IfTrue
 * @template IfFalse
 * @example
 * ```
 * type TestIfAny_String = IfAny<'a string', 1, 42> // 42
 * type TestIfAny_Any = IfAny<any, 1, 42> // 1
 * ```
 */
export type IfAny<TestedType, IfTrue = true, IfFalse = false> = If<
  IsAny<TestedType>,
  IfTrue,
  IfFalse
>;
