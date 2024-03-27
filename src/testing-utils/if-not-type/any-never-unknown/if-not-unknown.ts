/**
 * @file If-Else conditional that tests for `unknown`.
 */

import type { If } from '../../if-type/if/if';

import type { IsNotUnknown } from '../../is-not-type/any-never-unknown/is-not-unknown';

/**
 * @description If-Else conditional that tests for `unknown`.
 * @template TestedType
 * @template IfTrue
 * @template IfFalse
 * @example
 * ```
 * type TestIfNotUnknown_String = IfNotUnknown<'a string', 1, 42> // 1
 * type TestIfNotUnknown_Unknown = IfNotUnknown<unknown, 1, 42> // 42
 * ```
 */
export type IfNotUnknown<TestedType, IfTrue = true, IfFalse = false> = If<
  IsNotUnknown<TestedType>,
  IfTrue,
  IfFalse
>;
