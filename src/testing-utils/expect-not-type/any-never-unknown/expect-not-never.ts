/**
 * @file Returns the passed type only if anything other than `never` is passed; never otherwise.
 */

import type { IfNotNever } from '../../if-not-type/any-never-unknown/if-not-never';

/**
 * @description
 * Returns the type passed to `TestedType` if anything other than `unknown` is passed.
 *
 * Returns `never` otherwise.
 * @template TestedType *Should* raise an error if `never` is passed into it
 * but doesn't due to the special nature of
 * `never` in TypeScript.
 * @example
 * ```
 * type ExpectNotNever_Boolean = ExpectNotNever<boolean>; // boolean
 * type ExpectNotNever_Any = ExpectNotNever<any>; // any
 * type ExpectNotNever_Unknown = ExpectNotNever<unknown>; // unknown
 * type ExpectNotNever_String = ExpectNotNever<string>; // string
 * type ExpectNotNever_Number = ExpectNotNever<number>; // number
 * type ExpectNotNever_StringLiteral = ExpectNotNever<'not at all an interesting sentence'>; // 'not at all an interesting sentence'
 *
 * // TS should (but won't, unfortunately) complain on the line below:
 * type ExpectNotNever_Never = ExpectNotNever<never>; // never
 *
 * ```
 * @todo Write up a short treatise on `never` in TypeScript
 * and refer to it in confusing "`never`-related" places such as this one.
 * @see
 * Types used under the hood:
 * - IfNotType: {@link IfNotNever}
 */
export type ExpectNotNever<TestedType> = IfNotNever<
  TestedType,
  TestedType,
  never
>;
