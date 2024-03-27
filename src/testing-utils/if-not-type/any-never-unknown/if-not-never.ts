/**
 * @file IfNot-Else conditional that tests for `never`.
 */

import type { If } from '../../if-type/if/if';

import type { IsNotNever } from '../../is-not-type/any-never-unknown/is-not-never';

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { ExpectNotNever } from '../../expect-not-type/any-never-unknown/expect-not-never';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IfNotNever should come before this codeblock. */

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
 * @see
 * Used internally in: {@link ExpectNotNever}
 */
export type IfNotNever<TestedType, IfTrue = true, IfFalse = false> = If<
  IsNotNever<TestedType>,
  IfTrue,
  IfFalse
>;
