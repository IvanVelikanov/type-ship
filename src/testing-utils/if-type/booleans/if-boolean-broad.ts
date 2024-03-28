/**
 * @file If-Else conditional that tests ONLY for the broad `boolean` type (and its alias `true | false`).
 */

import type { If } from '../if/if';

import type { IsBooleanBroad } from '../../is-type/booleans/is-boolean-broad';

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { ExpectBooleanBroad } from '../../expect-type/booleans/expect-boolean-broad';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IfBooleanBroad should come before this codeblock. */

/**
 * @description If-Else conditional that tests ONLY for the broad `boolean` type (and its alias `true | false`).
 * @template TestedType Any type can be passed to this generic.
 * @template IfTrue The resulting type if `TestedType` is `boolean` or `true | false`. Default: `true`.
 * @template IfFalse The resulting type if `TestedType` is `true`, `false` or any other type. Default: `false`.
 * @example
 * ```
 * type TestIfBooleanBroad_Boolean = IfBooleanBroad<boolean, 1, 42> // 1
 * type TestIfBooleanBroad_TrueOrFalse = IfBooleanBroad<true | false, 1, 42> // 1
 *
 * type TestIfBooleanBroad_True = IfBooleanBroad<true, 1, 42> // 42
 * type TestIfBooleanBroad_False = IfBooleanBroad<false, 1, 42> // 42
 * type TestIfBooleanBroad_Any = IfBooleanBroad<any, 1, 42> // 42
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link If}
 * - IsType: {@link IsBooleanBroad}
 * @see
 * Used internally in:
 * - ExpectType: {@link ExpectBooleanBroad}
 */
export type IfBooleanBroad<TestedType, IfTrue = true, IfFalse = false> = If<
  IsBooleanBroad<TestedType>,
  IfTrue,
  IfFalse
>;
