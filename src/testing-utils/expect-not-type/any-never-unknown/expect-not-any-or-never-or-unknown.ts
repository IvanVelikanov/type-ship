/**
 * @file Returns true only if anything other than any or never or unknown is passed; never otherwise.
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { ExpectAnyOrNeverOrUnknown } from '../../expect-type/any-never-unknown/expect-any-or-never-or-unknown';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for StrictOmit should come after this line. */

import type { IsNotAnyOrNeverOrUnknown } from '../../is-not-type/any-never-unknown/is-not-any-or-never-or-unknown';

/**
 * @description Returns `true` if anything other than `any`, `never` or `unknown` is passed; raises an error and returns `never` otherwise.
 *
 * Opposite of: {@link ExpectAnyOrNeverOrUnknown}.
 * @template TestedType Raises an error if `any` or `unknown` is passed into it.
 * Should also raise an error on `never` but doesn't due to the nature of TS.
 * @example
 * ```
 * type ExpectNotAnyOrNeverOrUnknown_Boolean = ExpectNotAnyOrNeverOrUnknown<boolean>; // true
 * type ExpectNotAnyOrNeverOrUnknown_String = ExpectNotAnyOrNeverOrUnknown<string>; // true
 * type ExpectNotAnyOrNeverOrUnknown_Number = ExpectNotAnyOrNeverOrUnknown<number>; // true
 *
 * // TS errors out on everything below:
 * type ExpectNotAnyOrNeverOrUnknown_Any = ExpectNotAnyOrNeverOrUnknown<any>; // never
 * type ExpectNotAnyOrNeverOrUnknown_Never = ExpectNotAnyOrNeverOrUnknown<never>; // never
 * type ExpectNotAnyOrNeverOrUnknown_Unknown = ExpectNotAnyOrNeverOrUnknown<unknown>; // never
 * ```
 * @see
 * Types used under the hood:
 * - IsNotType: {@link IsNotAnyOrNeverOrUnknown}.
 */
export type ExpectNotAnyOrNeverOrUnknown<
  TestedType extends IsNotAnyOrNeverOrUnknown<TestedType> extends true
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Makes sense to have `any` here, since anything except for `any`, `never` or `unknown` is permissible.
      any
    : never
> = IsNotAnyOrNeverOrUnknown<TestedType> extends true ? true : never;
