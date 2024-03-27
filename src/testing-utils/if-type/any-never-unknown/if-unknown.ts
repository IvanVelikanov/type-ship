/**
 * @file If-Else conditional that tests for `unknown`.
 */

import type { If } from '../if/if';

import type { IsUnknown } from '../../is-type/any-never-unknown/is-unknown';

/**
 * @description If-Else conditional that tests for `unknown`.
 * @template TestedType Any type can be passed to this generic.
 * @template IfTrue The resulting type if `TestedType` is `unknown`. Default: `true`.
 * @template IfFalse The resulting type if `TestedType` is NOT `unknown`. Default: `false`.
 * @example
 * ```
 * type TestIfUnknown_String = IfUnknown<'a string', 1, 42> // 42
 * type TestIfUnknown_Unknown = IfUnknown<unknown, 1, 42> // 1
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link If}
 * - IsType: {@link IsUnknown}
 */
export type IfUnknown<TestedType, IfTrue = true, IfFalse = false> = If<
  IsUnknown<TestedType>,
  IfTrue,
  IfFalse
>;
