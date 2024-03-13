/**
 * @file A stricter version of the built-in Omit utility type ({@link https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys TS Omit}).
 */

import type { ObjectKeyTypes } from '../helpers/object-key-types';
import type { EmptyObject } from '../helpers/empty-object';

/**
 * @summary Construct a type with the properties of ObjectLike except for those in type KeysUnion.
 * @template ObjectLike An object-like type or interface from which some keys are to be excluded.
 * @template KeysUnion A union of keys that are present in the ObjectLike generic, used to excluded keys from the created type.
 * @description While there are some good reasons to keep Omit so wide open (see {@link https://github.com/microsoft/TypeScript/issues/30825 TS issue 30825}),
 * it is baffling that there isn't a stricter built-in alternative to the loose built-in Omit. This, along with the other strict versions of built-in
 * utility types is an attempt to fix that.
 *
 * **Use-cases**:
 * - Creating a new type or interface which omits one or more keys from another object-like type or interface -
 * only the keys already present in the original type/interface can be selected.
 * @example
 * **SUCCESS:**
 * ```
 * import type { StrictOmit } from 'type-ship';
 *
 * interface FooBarBazz {
 *   foo: string;
 *   bar: string;
 *   bazz: string;
 * }
 *
 * type Bar = StrictOmit<FooBarBazz, 'foo' | 'bazz'>;
 * ```
 * **Result:**
 * ```
 * type Bar = {
 *   bar: string;
 * }
 * ```
 * @example
 * **ERRORS:**
 * ```
 * import type { StrictOmit } from 'type-ship';
 *
 * interface FooBarBazz {
 *   foo: string;
 *   bar: string;
 *   bazz: string;
 * }
 *
 * type Bar = StrictOmit<'nonObjectLikeTypeStringForExample', 'foo' | 'bazz'>;
 * ```
 * **Result:**
 * @see {@link https://typescript.tv/errors/#ts2344 TS 2344}. Type 'string' does not satisfy the constraint 'object' (error on the **first** generic parameter).
 * ```
 * type Bar = StrictOmit<FooBarBazz, 'foo' | 'bazzbazzbazz'>;
 * ```
 * **Result:**
 * @see {@link https://typescript.tv/errors/#ts2344 TS 2344}. Type '"bazzbazzbazz"' is not assignable to type 'keyof FooBarBazz' (error on the **second** generic parameter).
 * @todo
 * While this utility type is useful as-is, there is a number of issues that need to be addressed for it to be fully bulletproof:
 *
 * **Issue #1:**
 * If `ObjectLike` generic is not narrow (say, something like `Record<string, any>`), the resulting type stays exactly the same as `ObjectLike`, rendering this type utterly useless.
 * ```
 * import type { StrictOmit } from 'type-ship';
 *
 * type AnythingGoes = StrictOmit<Record<string, any>, 'foo' | 'bar'>
 *
 * const wildWest: AnythingGoes = {
 *   foo: '',
 *   bar: ,
 *   anything: null,
 *   else: []
 * }
 * ```
 * The `wildWest` in the example above shows no errors whatsoever.
 * What it should do though is allow the `anything` and `else` keys but display TS errors on the `foo` and `bar` keys.
 *
 * **Issue #2:**
 * As of now, this type may not work correctly with Maps or Sets.
 * @see
 * Types used under the hood: {@link ObjectKeyTypes}, {@link EmptyObject}.
 */
export type StrictOmit<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- unknown in the Record leads to some strange errors. Investigate it later!
  ObjectLike extends Record<ObjectKeyTypes, any>,
  KeysUnion extends keyof ObjectLike
> = Omit<ObjectLike, KeysUnion> extends EmptyObject
  ? EmptyObject
  : Omit<ObjectLike, KeysUnion>;
