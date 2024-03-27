/**
 * @file Returns the passed type only if anything other than `any` is passed; never if `any` is passed.
 */

import type { IfNotAny } from '../../if-not-type/any-never-unknown/if-not-any';

/**
 * @description
 * Returns the type passed to `TestedType` if anything other than `any` is passed.
 *
 * Raises an error and returns `never` otherwise.
 * @template TestedType Raises an error if `any` is passed into it.
 * @example
 * ```
 * type ExpectNotAny_Boolean = ExpectNotAny<boolean>; // boolean
 * type ExpectNotAny_Never = ExpectNotAny<never>; // never
 * type ExpectNotAny_Unknown = ExpectNotAny<unknown>; // unknown
 * type ExpectNotAny_String = ExpectNotAny<string>; // string
 * type ExpectNotAny_Number = ExpectNotAny<number>; // number
 * type ExpectNotAny_StringLiteral = ExpectNotAny<'a profound statement'>; // 'a profound statement'
 *
 * // TS errors out:
 * type ExpectNotAny_Any = ExpectNotAny<any>; // never
 * ```
 * @see
 * Types used under the hood:
 * - IfNot: {@link IfNotAny}
 */
export type ExpectNotAny<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Testing for `any` here, dawg, hard to get around using `any`s in this context :)
  TestedType extends IfNotAny<TestedType, any, never>
> = IfNotAny<TestedType, TestedType, never>;
