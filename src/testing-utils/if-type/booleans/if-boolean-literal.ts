/**
 * @file If-Else conditional that tests ONLY for boolean literals (`true` OR `false`).
 */

import type { If } from '../if/if';

import type { IsBooleanLiteral } from '../../is-type/booleans/is-boolean-literal';

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { ExpectBooleanLiteral } from '../../expect-type/booleans/expect-boolean-literal';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IfBooleanLiteral should come before this codeblock. */

/**
 * @description If-Else conditional that tests ONLY for boolean literals (`true` OR `false`).
 * @template TestedType Any type can be passed to this generic.
 * @template IfTrue The resulting type if `TestedType` is `true` OR `false`. Default: `true`.
 * @template IfFalse The resulting type if `TestedType` is `boolean`, `true | false`, or any other type. Default: `false`.
 * @example
 * ```
 * type TestIfBooleanLiteral_True = IfBooleanLiteral<true, 1, 42> // 1
 * type TestIfBooleanLiteral_False = IfBooleanLiteral<false, 1, 42> // 1
 *
 * type TestIfBooleanLiteral_Boolean = IfBooleanLiteral<boolean, 1, 42> // 42
 * type TestIfBooleanLiteral_TrueOrFalse = IfBooleanLiteral<true | false, 1, 42> // 42
 *
 * type TestIfBooleanLiteral_Any = IfBooleanLiteral<any, 1, 42> // 42
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link If}
 * - IsType: {@link IsBooleanLiteral}
 * @see
 * Used internally in:
 * - ExpectType: {@link ExpectBooleanLiteral}
 */
export type IfBooleanLiteral<TestedType, IfTrue = true, IfFalse = false> = If<
  IsBooleanLiteral<TestedType>,
  IfTrue,
  IfFalse
>;
