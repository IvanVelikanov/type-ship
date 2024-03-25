/**
 * @file Returns false only if `any` is passed; true otherwise.
 */

/**
 * @description Returns `false` **only** if `any` is passed; `true` otherwise.
 * @example
 * ```
 * type IsNotAny_Any = IsNotAny<any>; // false
 *
 * type IsNotAny_Never = IsNotAny<never>; // true
 * type IsNotAny_Unknown = IsNotAny<unknown>; // true
 * type IsNotAny_String = IsNotAny<string>; // true
 * type IsNotAny_Number = IsNotAny<number>; // true
 * ```
 */
export type IsNotAny<TestedType> = 'something' extends number & TestedType
  ? false
  : true;
