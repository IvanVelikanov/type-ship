/**
 * @file Returns `any` only if `any` is passed; never otherwise.
 */

import type { IfAny } from '../../if-type/any-never-unknown/if-any';

/**
 * @description
 * Returns `any` **only** if `any` is passed.
 *
 * Raises an error and returns `never` otherwise.
 * @template TestedType Raises an error if anything other than `any` is passed into it...
 *
 * ...Unless it's `never` -- but we don't talk about it just yet.
 * @example
 * ```
 * type ExpectAny_Any = ExpectAny<any>; // any
 *
 * // TS errors out on everything below:
 * type ExpectAny_Boolean = ExpectAny<boolean>; // never
 * type ExpectAny_Never = ExpectAny<never>; // never
 * type ExpectAny_Unknown = ExpectAny<unknown>; // never
 * type ExpectAny_String = ExpectAny<string>; // never
 * type ExpectAny_Number = ExpectAny<number>; // never
 * ```
 * @see
 * Types used under the hood:
 * - IfType: {@link IfAny}
 */
export type ExpectAny<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Testing for `any` here, dawg, hard to get around using `any`s in this context :)
  TestedType extends IfAny<TestedType, any, never>
> = IfAny<TestedType, TestedType, never>;
