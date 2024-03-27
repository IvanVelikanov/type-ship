/**
 * @file If-Else conditional that tests for `any`.
 */

import type { If } from '../../if-type/if/if';

import type { IsNotAny } from '../../is-not-type/any-never-unknown/is-not-any';

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { ExpectNotAny } from '../../expect-not-type/any-never-unknown/expect-not-any';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IfNotAny should come before this codeblock. */

/**
 * @description If-Else conditional that tests for `any`.
 * @template TestedType Any type can be passed to this generic.
 * @template IfTrue The resulting type if `TestedType` is NOT `any`. Default: `true`.
 * @template IfFalse The resulting type if `TestedType` is `any`. Default: `false`.
 * @example
 * ```
 * type TestIfNotAny_String = IfNotAny<'a string', 1, 42> // 1
 * type TestIfNotAny_Any = IfNotAny<any, 1, 42> // 42
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link If}
 * - IsNotType: {@link IsNotAny}
 * @see
 * Used internally in:
 * - ExpectNotType: {@link ExpectNotAny}
 */
export type IfNotAny<TestedType, IfTrue = true, IfFalse = false> = If<
  IsNotAny<TestedType>,
  IfTrue,
  IfFalse
>;
