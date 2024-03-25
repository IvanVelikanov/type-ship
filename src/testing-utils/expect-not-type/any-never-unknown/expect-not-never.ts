/**
 * @file Returns true only if anything other than `never` is passed; never otherwise.
 */

import type { IsNotNever } from '../../is-not-type/any-never-unknown/is-not-never';

/**
 * @description Returns `true` if anything other than `never` is passed; returns `never` otherwise.
 * @template TestedType *Should* raise an error if `never` is passed into it
 * but doesn't due to the special nature of
 * `never` in TypeScript.
 * @example
 * ```
 * type ExpectNotNever_Boolean = ExpectNotNever<boolean>; // true
 * type ExpectNotNever_Any = ExpectNotNever<any>; // true
 * type ExpectNotNever_Unknown = ExpectNotNever<unknown>; // true
 * type ExpectNotNever_String = ExpectNotNever<string>; // true
 * type ExpectNotNever_Number = ExpectNotNever<number>; // true
 *
 * // TS errors out on everything below:
 * type ExpectNotNever_Never = ExpectNotNever<never>; // never
 *
 * ```
 * @todo Write up a short treatise on `never` in TypeScript
 * and refer to it in confusing "`never`-related" places such as this one.
 */
export type ExpectNotNever<TestedType> = IsNotNever<TestedType> extends true
  ? true
  : never;
