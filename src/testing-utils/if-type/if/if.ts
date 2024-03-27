/**
 * @file If type factory is used to create other, more specific IfType types.
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { IfAny } from '../any-never-unknown/if-any';
import type { IfNever } from '../any-never-unknown/if-never';
import type { IfUnknown } from '../any-never-unknown/if-unknown';
import type { IfAnyOrNeverOrUnknown } from '../any-never-unknown/if-any-or-never-or-unknown';

import type { IfNotAny } from '../../if-not-type/any-never-unknown/if-not-any';
import type { IfNotNever } from '../../if-not-type/any-never-unknown/if-not-never';
import type { IfNotUnknown } from '../../if-not-type/any-never-unknown/if-not-unknown';
import type { IfNotAnyOrNeverOrUnknown } from '../../if-not-type/any-never-unknown/if-not-any-or-never-or-unknown';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for If should come before after this line. */

/* eslint-disable jsdoc/check-indentation -- This type is used a lot in other types, thus the contents of the final @see tag will need to be indented to make it digestible */
/**
 * @template Condition The boolean condition against which the If statement checks.
 * @template IfTrue The resulting type if `Condition` extends `true`. Default: `true`.
 * @template IfFalse The resulting type if `Condition` extends `false`. Default: `false`.
 * @description If type factory is used to create other, more specific IfType types.
 * @example
 * ```
 * type IfAny<TestedType, IfTrue = true, IfFalse = false> = If<
 *   IsAny<TestedType>,
 *   IfTrue,
 *   IfFalse
 * >;
 * ```
 * @see
 *
 * Used internally in:
 * - IfType:
 *   - any-never-unknown: {@link IfAny}, {@link IfNever}, {@link IfUnknown}, {@link IfAnyOrNeverOrUnknown}
 * - IfNotType:
 *   - any-never-unknown: {@link IfNotAny}, {@link IfNotNever}, {@link IfNotUnknown}, {@link IfNotAnyOrNeverOrUnknown}
 */
export type If<
  Condition extends boolean,
  IfTrue = true,
  IfFalse = false
> = Condition extends true ? IfTrue : IfFalse;
/* eslint-enable jsdoc/check-indentation -- This type is used a lot in other types, thus the contents of the final @see tag will need to be indented to make it digestible */
