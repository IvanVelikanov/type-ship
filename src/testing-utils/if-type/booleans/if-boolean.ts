/**
 * @file If-Else conditional that tests for booleans.
 */

import type { If } from '../if/if';

import type { IsBoolean } from '../../is-type/booleans/is-boolean';

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { ExpectBoolean } from '../../expect-type/booleans/expect-boolean';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IfBoolean should come before this codeblock. */

/**
 * @description If-Else conditional that tests for booleans.
 * @template TestedType Any type can be passed to this generic.
 * @template IfTrue The resulting type if `TestedType` is a boolean. Default: `true`.
 * @template IfFalse The resulting type if `TestedType` is NOT a boolean. Default: `false`.
 * @example
 * ```
 * type TestIfBoolean_True = IfBoolean<true, 1, 42> // 1
 * type TestIfBoolean_False = IfBoolean<false, 1, 42> // 1
 * type TestIfBoolean_Boolean = IfBoolean<boolean, 1, 42> // 1
 * type TestIfBoolean_TrueOrFalse = IfBoolean<true | false, 1, 42> // 1
 *
 * type TestIfBoolean_Any = IfBoolean<any, 1, 42> // 42
 * type TestIfBoolean_Unknown = IfBoolean<unknown, 1, 42> // 42
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link If}
 * - IsType: {@link IsBoolean}
 * @see
 * Used internally in:
 * - ExpectType: {@link ExpectBoolean}
 */
export type IfBoolean<TestedType, IfTrue = true, IfFalse = false> = If<
  IsBoolean<TestedType>,
  IfTrue,
  IfFalse
>;
