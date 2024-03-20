/**
 * @file Returns true only if `any` is passed; false otherwise.
 */

/**
 * @description Returns `true` **only** if `any` is passed; `false` otherwise.
 * @example
 * ```
 * type IsAny_Any = IsAny<any>; // true
 *
 * type IsAny_Never = IsAny<never>; // false
 * type IsAny_Unknown = IsAny<unknown>; // false
 * type IsAny_String = IsAny<string>; // false
 * type IsAny_Number = IsAny<number>; // false
 * ```
 */
export type IsAny<TestedType> = 'something' extends number & TestedType
  ? true
  : false;
