/**
 * @file If-Else conditional that tests for `any`.
 */

import type { If } from '../../if-type/if/if';

import type { IsNotAny } from '../../is-not-type/any-never-unknown/is-not-any';

/**
 * @description If-Else conditional that tests for `any`.
 * @template TestedType Any type can be passed to this generic.
 * @template IfTrue The resulting type if `TestedType` is NOT `any`. Default: `true`.
 * @template IfFalse The resulting type if `TestedType` is `any`. Default: `false`.
 * @example
 * ```
 * type TestIfNotAny_String = IfNotAny<'a string', 1, 42> // 1
 * type TestIfNotAny_Any = IfNotAny<any, 1, 42> // 42
 * ```
 * Types used under the hood:
 * - IfType: {@link If}
 * - IsNotType: {@link IsNotAny}
 */
export type IfNotAny<TestedType, IfTrue = true, IfFalse = false> = If<
  IsNotAny<TestedType>,
  IfTrue,
  IfFalse
>;
