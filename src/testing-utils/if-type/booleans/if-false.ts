/**
 * @file If-Else conditional that tests for `false`.
 */

import type { If } from '../if/if';

import type { IsFalse } from '../../is-type/booleans/is-false';

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { ExpectFalse } from '../../expect-type/booleans/expect-false';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IfFalse should come before this codeblock. */

/**
 * @description If-Else conditional that tests for `false`.
 * @template TestedType Any type can be passed to this generic.
 * @template IfTrue The resulting type if `TestedType` is `false`. Default: `true`.
 * @template IfFalse The resulting type if `TestedType` is NOT `false`. Default: `false`.
 * @example
 * ```
 * type TestIfFalse_True = IfFalse<true, 1, 42> // 1
 * type TestIfFalse_False = IfFalse<false, 1, 42> // 1
 * type TestIfFalse_False = IfFalse<boolean, 1, 42> // 1
 * type TestIfFalse_TrueOrFalse = IfFalse<true | false, 1, 42> // 1
 *
 * type TestIfFalse_Any = IfFalse<any, 1, 42> // 42
 * type TestIfFalse_Unknown = IfFalse<unknown, 1, 42> // 42
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link If}
 * - IsType: {@link IsFalse}
 * @see
 * Used internally in:
 * - ExpectType: {@link ExpectFalse}
 */
export type IfFalse<TestedType, IfTrue = true, IfFalseResult = false> = If<
  IsFalse<TestedType>,
  IfTrue,
  IfFalseResult
>;
