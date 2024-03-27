/**
 * @file IfNot-Else conditional that tests for `unknown`.
 */

import type { If } from '../../if-type/if/if';

import type { IsNotUnknown } from '../../is-not-type/any-never-unknown/is-not-unknown';

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { ExpectNotUnknown } from '../../expect-not-type/any-never-unknown/expect-not-unknown';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IfNotUnknown should come before this codeblock. */

/**
 * @description IfNot-Else conditional that tests for `unknown`.
 * @template TestedType Any type can be passed to this generic.
 * @template IfTrue The resulting type if `TestedType` is NOT `unknown`.
 * @template IfFalse The resulting type if `TestedType` is `unknown`.
 * @example
 * ```
 * type TestIfNotUnknown_String = IfNotUnknown<'a string', 1, 42> // 1
 * type TestIfNotUnknown_Unknown = IfNotUnknown<unknown, 1, 42> // 42
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link If}
 * - IsNotType: {@link IsNotUnknown}
 * @see
 * Used internally in:
 * - ExpectNotType: {@link ExpectNotUnknown}
 */
export type IfNotUnknown<TestedType, IfTrue = true, IfFalse = false> = If<
  IsNotUnknown<TestedType>,
  IfTrue,
  IfFalse
>;
