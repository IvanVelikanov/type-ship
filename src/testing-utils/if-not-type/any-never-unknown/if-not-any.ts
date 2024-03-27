/**
 * @file If-Else conditional that tests for `any`.
 */

import type { If } from '../../if-type/if/if';

import type { IsNotAny } from '../../is-not-type/any-never-unknown/is-not-any';

/**
 * @description If-Else conditional that tests for `any`.
 * @template TestedType
 * @template IfTrue
 * @template IfFalse
 * @example
 * ```
 * type TestIfNotAny_String = IfNotAny<'a string', 1, 42> // 1
 * type TestIfNotAny_Any = IfNotAny<any, 1, 42> // 42
 * ```
 */
export type IfNotAny<TestedType, IfTrue = true, IfFalse = false> = If<
  IsNotAny<TestedType>,
  IfTrue,
  IfFalse
>;
