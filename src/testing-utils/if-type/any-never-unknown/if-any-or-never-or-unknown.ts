/**
 * @file If-Else conditional that tests for `never`, `any` and `unknown`.
 */

import type { If } from '../if/if';

import type { IsAnyOrNeverOrUnknown } from '../../is-type/any-never-unknown/is-any-or-never-or-unknown';

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { ExpectAnyOrNeverOrUnknown } from '../../expect-type/any-never-unknown/expect-any-or-never-or-unknown';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IfAnyOrNeverOrUnknown should come before this codeblock. */

/**
 * @description If-Else conditional that tests for `never`, `any` and `unknown`.
 * @template TestedType Any type can be passed to this generic.
 * @template IfTrue The resulting type if `TestedType` is `any`, `never` or `unknown`. Default: `true`.
 * @template IfFalse The resulting type if `TestedType` is NOT `any`, `never` or `unknown`. Default: `false`.
 * @example
 * ```
 * type TestIfAnyOrNeverOrUnknown_String = IfAnyOrNeverOrUnknown<'a string', 1, 42> // 42
 *
 * type TestIfAnyOrNeverOrUnknown_Any = IfAnyOrNeverOrUnknown<any, 1, 42> // 1
 * type TestIfAnyOrNeverOrUnknown_Never = IfAnyOrNeverOrUnknown<never, 1, 42> // 1
 * type TestIfAnyOrNeverOrUnknown_Unknown = IfAnyOrNeverOrUnknown<unknown, 1, 42> // 1
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link If}
 * - IsType: {@link IsAnyOrNeverOrUnknown}
 * @see
 * Used internally in:
 * - ExpectType: {@link ExpectAnyOrNeverOrUnknown}
 */
export type IfAnyOrNeverOrUnknown<
  TestedType,
  IfTrue = true,
  IfFalse = false
> = If<IsAnyOrNeverOrUnknown<TestedType>, IfTrue, IfFalse>;
