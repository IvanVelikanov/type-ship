/**
 * @file A stricter version of the built-in Pick utility type ({@link https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys TS Pick}).
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Need this for JSDoc @link.
import type { StrictOmit } from './strict-omit';

/**
 * @summary Construct a type with the properties of `ObjectLike` picked from those in type `KeysUnion`.
 * @template ObjectLike An object-like type or interface from which some keys are to be picked.
 * @template KeysUnion A union of keys that are present in the ObjectLike generic, used to pick keys from the created type.
 * @description A stricter version of TS's built-in {@link Pick} utility type. Opposite of {@link StrictOmit}.
 *
 * **Use-cases**:
 * - Creating a new type or interface which picks one or more keys from another object-like type or interface -
 * only the keys already present in the original type/interface can be selected.
 * @example
 * **SUCCESS:**
 * ```
 * import type { StrictPick } from 'type-ship';
 *
 * interface FooBarBazz {
 *   foo: string;
 *   bar: string;
 *   bazz: string;
 * }
 *
 * type FooBazz = StrictPick<FooBarBazz, 'foo' | 'bazz'>;
 * ```
 * **Result:**
 * ```
 * type FooBazz = {
 *   foo: string;
 *   bazz: string
 * }
 * ```
 * @example
 * **ERRORS:**
 * ```
 * import type { StrictPick } from 'type-ship';
 *
 * interface FooBarBazz {
 *   foo: string;
 *   bar: string;
 *   bazz: string;
 * }
 *
 * type FooBazz = StrictPick<'nonObjectLikeTypeStringForExample', 'foo' | 'bazz'>;
 * ```
 * **Result:**
 * @see {@link https://typescript.tv/errors/#ts2344 TS 2344}. Type 'string' does not satisfy the constraint 'Record<PropertyKey, any>' (error on the **first** generic parameter).
 * ```
 * type FooBazzbazzbazz = StrictPick<FooBarBazz, 'foo' | 'bazzbazzbazz'>;
 * ```
 * **Result:**
 * @see {@link https://typescript.tv/errors/#ts2344 TS 2344}. Type '"bazzbazzbazz"' is not assignable to type 'keyof FooBarBazz' (error on the **second** generic parameter).
 * @todo
 *
 * **Issue #1:**
 * As of now, this type may not work correctly with Maps or Sets.
 */
export type StrictPick<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- unknown in the Record leads to some strange errors. Investigate it later!
  ObjectLike extends Record<PropertyKey, any>,
  KeysUnion extends keyof ObjectLike
> = Pick<ObjectLike, KeysUnion>;
