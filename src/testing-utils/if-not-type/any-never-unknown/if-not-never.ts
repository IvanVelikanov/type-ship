/**
 * @file IfNot-Else conditional that tests for `never`.
 */

import type { If } from '../../if-type/if/if';

import type { IsNotNever } from '../../is-not-type/any-never-unknown/is-not-never';

/**
 * @description IfNot-Else conditional that tests for `never`.
 * @template TestedType Any type can be passed to this generic.
 * @template IfTrue The resulting type if `TestedType` is NOT `never`. Default: `true`.
 * @template IfFalse The resulting type if `TestedType` is `never`. Default: `false`.
 * @example
 * ```
 * type TestIfNotNever_String = IfNotNever<'a string', 1, 42> // 1
 * type TestIfNotNever_Never = IfNotNever<never, 1, 42> // 42
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link If}
 * - IsNotType: {@link IsNotNever}
 */
export type IfNotNever<TestedType, IfTrue = true, IfFalse = false> = If<
  IsNotNever<TestedType>,
  IfTrue,
  IfFalse
>;
