/**
 * @file IfNot-Else conditional that tests for `unknown`.
 */

import type { If } from '../../if-type/if/if';

import type { IsNotUnknown } from '../../is-not-type/any-never-unknown/is-not-unknown';

/**
 * @description IfNot-Else conditional that tests for `unknown`.
 * @template TestedType Any type can be passed to this generic.
 * @template IfTrue The resulting type if `TestedType` is NOT `unknown`.
 * @template IfFalse The resulting type if `TestedType` is `unknown`.
 * @example
 * ```
 * type TestIfNotUnknown_String = IfNotUnknown<'a string', 1, 42> // 1
 * type TestIfNotUnknown_Unknown = IfNotUnknown<unknown, 1, 42> // 42
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link If}
 * - IsNotType: {@link IsNotUnknown}
 */
export type IfNotUnknown<TestedType, IfTrue = true, IfFalse = false> = If<
  IsNotUnknown<TestedType>,
  IfTrue,
  IfFalse
>;
