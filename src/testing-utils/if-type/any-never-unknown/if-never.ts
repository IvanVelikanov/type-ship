/**
 * @file If-Else conditional that tests for `never`.
 */

import type { If } from '../if/if';

import type { IsNever } from '../../is-type/any-never-unknown/is-never';

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { ExpectNever } from '../../expect-type/any-never-unknown/expect-never';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IfNever should come before this codeblock. */

/**
 * @description If-Else conditional that tests for `never`.
 * @template TestedType Any type can be passed to this generic.
 * @template IfTrue The resulting type if `TestedType` is `never`. Default: `true`.
 * @template IfFalse The resulting type if `TestedType` is NOT `never`. Default: `false`.
 * @example
 * ```
 * type TestIfNever_String = IfNever<'a string', 1, 42> // 42
 * type TestIfNever_Never = IfNever<never, 1, 42> // 1
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link If}
 * - IsType: {@link IsNever}
 * @see
 * Used internally in:
 * - ExpectType: {@link ExpectNever}
 */
export type IfNever<TestedType, IfTrue = true, IfFalse = false> = If<
  IsNever<TestedType>,
  IfTrue,
  IfFalse
>;
