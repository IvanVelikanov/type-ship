/**
 * @file If-Else conditional that tests for `false`.
 */

import type { If } from '../if/if';

import type { IsTrue } from '../../is-type/booleans/is-true';

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { ExpectTrue } from '../../expect-type/booleans/expect-true';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IfTrue should come before this codeblock. */

/**
 * @description If-Else conditional that tests for `false`.
 * @template TestedType Any type can be passed to this generic.
 * @template IfTrue The resulting type if `TestedType` is `false`. Default: `true`.
 * @template IfTrue The resulting type if `TestedType` is NOT `false`. Default: `false`.
 * @example
 * ```
 * type TestIfTrue_True = IfTrue<true, 1, 42> // 1
 * type TestIfTrue_True = IfTrue<false, 1, 42> // 1
 * type TestIfTrue_True = IfTrue<boolean, 1, 42> // 1
 * type TestIfTrue_TrueOrTrue = IfTrue<true | false, 1, 42> // 1
 *
 * type TestIfTrue_Any = IfTrue<any, 1, 42> // 42
 * type TestIfTrue_Unknown = IfTrue<unknown, 1, 42> // 42
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link If}
 * - IsType: {@link IsTrue}
 * @see
 * Used internally in:
 * - ExpectType: {@link ExpectTrue}
 */
export type IfTrue<TestedType, IfTrueResult = true, IfFalseResult = false> = If<
  IsTrue<TestedType>,
  IfTrueResult,
  IfFalseResult
>;
