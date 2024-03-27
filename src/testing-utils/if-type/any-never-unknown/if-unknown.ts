/**
 * @file If-Else conditional that tests for `unknown`.
 */

import type { If } from '../if/if';

import type { IsUnknown } from '../../is-type/any-never-unknown/is-unknown';

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { ExpectUnknown } from '../../expect-type/any-never-unknown/expect-unknown';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for IfUnknown should come after this line. */

/**
 * @description If-Else conditional that tests for `unknown`.
 * @template TestedType Any type can be passed to this generic.
 * @template IfTrue The resulting type if `TestedType` is `unknown`. Default: `true`.
 * @template IfFalse The resulting type if `TestedType` is NOT `unknown`. Default: `false`.
 * @example
 * ```
 * type TestIfUnknown_String = IfUnknown<'a string', 1, 42> // 42
 * type TestIfUnknown_Unknown = IfUnknown<unknown, 1, 42> // 1
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link If}
 * - IsType: {@link IsUnknown}
 * @see
 * Used internally in:
 * - ExpectType: {@link ExpectUnknown}
 */
export type IfUnknown<TestedType, IfTrue = true, IfFalse = false> = If<
  IsUnknown<TestedType>,
  IfTrue,
  IfFalse
>;
