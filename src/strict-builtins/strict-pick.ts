/**
 * @file A stricter version of the built-in Pick utility type ({@link https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys TS Pick}).
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { StrictOmit } from './strict-omit';
import type { LoosePick } from '../loose-builtins/loose-pick';
import type { EXPERIMENTAL_LooseOmit } from '../EXPERIMENTAL/EXPERIMENAL_loose-omit';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for LoosePick should come after this line. */

/**
 * @summary Construct a type with the properties of `ObjectLike` picked from those in type `KeysUnion`.
 * @template ObjectLike An object-like type or interface from which some keys are to be picked.
 * @template KeysUnion A union of keys that are present in the ObjectLike generic, used to pick keys from the created type.
 * @description A stricter version of TS's built-in {@link Pick} utility type.
 *
 * Opposite of {@link StrictOmit}.
 *
 * Strict version of {@link LoosePick}.
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
 *
 * **Issue #2:**
 * Arrays can be passed into `ObjectLike` generic -- there's a rather simple way to change this and it needs to happen soon.
 *
 * **Issue 3:**
 * No autocomplete for `KeysUnion` number and symbol keys -- only for strings.
 * An attempt to fix that will first be conducted in {@link EXPERIMENTAL_LooseOmit}.
 * But there is a case to be made that types should be created for Omit and Pick types (both Loose and Strict varieties) that *ONLY* accept strings for object keys in the `KeysUnion`.
 * Using numbers as keys is plainly bad practice and using symbols is rare enough that using the wide {@link PropertyKey} type for keys in these utilities -- while strictly more "correct" -- will probably lead to more confusion than it's worth.
 * We shall see...
 */
export type StrictPick<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- unknown in the Record leads to some strange errors. Investigate it later!
  ObjectLike extends Record<PropertyKey, any>,
  KeysUnion extends keyof ObjectLike
> = Pick<ObjectLike, KeysUnion>;
