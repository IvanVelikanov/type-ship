/**
 * @file Returns the passed type only if anything other than any or never or unknown is passed; never otherwise.
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { ExpectAnyOrNeverOrUnknown } from '../../expect-type/any-never-unknown/expect-any-or-never-or-unknown';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for StrictOmit should come after this line. */

import type { IfNotAnyOrNeverOrUnknown } from '../../if-not-type/any-never-unknown/if-not-any-or-never-or-unknown';

/**
 * @description
 * Returns the type passed to `TestedType` if anything other than `any`, `never` or `unknown` is passed.
 *
 * Raises an error and returns `never` otherwise.
 *
 * Opposite of: {@link ExpectAnyOrNeverOrUnknown}.
 * @template TestedType Raises an error if `any` or `unknown` is passed into it.
 * Should also raise an error on `never` but doesn't due to the nature of TS.
 * @example
 * ```
 * type ExpectNotAnyOrNeverOrUnknown_Boolean = ExpectNotAnyOrNeverOrUnknown<boolean>; // boolean
 * type ExpectNotAnyOrNeverOrUnknown_String = ExpectNotAnyOrNeverOrUnknown<string>; // string
 * type ExpectNotAnyOrNeverOrUnknown_Number = ExpectNotAnyOrNeverOrUnknown<number>; // number
 * type ExpectNotAnyOrNeverOrUnknown_StringLiteral = ExpectNotAnyOrNeverOrUnknown<'a banal statement'>; // 'a banal statement'
 *
 * // TS errors out on everything below:
 * type ExpectNotAnyOrNeverOrUnknown_Any = ExpectNotAnyOrNeverOrUnknown<any>; // never
 * type ExpectNotAnyOrNeverOrUnknown_Never = ExpectNotAnyOrNeverOrUnknown<never>; // never -- it should error here but won't due to the nature of `never`
 * type ExpectNotAnyOrNeverOrUnknown_Unknown = ExpectNotAnyOrNeverOrUnknown<unknown>; // never
 * ```
 * @see
 * Types used under the hood:
 * - IfNotType: {@link IfNotAnyOrNeverOrUnknown}
 */
export type ExpectNotAnyOrNeverOrUnknown<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Makes sense to have `any` here, since anything except for `any`, `never` or `unknown` is permissible.
  TestedType extends IfNotAnyOrNeverOrUnknown<TestedType, any, never> //
> = IfNotAnyOrNeverOrUnknown<TestedType, TestedType, never>;
