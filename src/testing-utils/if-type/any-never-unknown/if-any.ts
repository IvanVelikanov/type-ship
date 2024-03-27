/**
 * @file If-Else conditional that tests for `any`.
 */

import type { If } from '../if/if';

import type { IsAny } from '../../is-type/any-never-unknown/is-any';

/**
 * @description If-Else conditional that tests for `any`.
 * @template TestedType Any type can be passed to this generic.
 * @template IfTrue The resulting type if `TestedType` is `any`. Default: `true`.
 * @template IfFalse The resulting type if `TestedType` is NOT `any`. Default: `false`.
 * @example
 * ```
 * type TestIfAny_String = IfAny<'a string', 1, 42> // 42
 * type TestIfAny_Any = IfAny<any, 1, 42> // 1
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link If}
 * - IsType: {@link IsAny}
 */
export type IfAny<TestedType, IfTrue = true, IfFalse = false> = If<
  IsAny<TestedType>,
  IfTrue,
  IfFalse
>;
