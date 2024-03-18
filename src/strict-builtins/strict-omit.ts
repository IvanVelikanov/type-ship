/**
 * @file A stricter version of the built-in Omit utility type ({@link https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys TS Omit}).
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { StrictPick } from './strict-pick';
import type { LooseOmit } from '../loose-builtins/loose-omit';
import type { EXPERIMENTAL_LooseOmit } from '../EXPERIMENTAL/EXPERIMENAL_loose-omit';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for StrictOmit should come after this line. */

import type { EmptyObject } from '../helpers/empty-object';
import type { ReturnObjectLikeOrNever } from '../helpers/return-object-like-or-never';

/**
 * @summary Construct a type with the properties of `ObjectLike` except for those in type `KeysUnion`.
 * @template ObjectLike An object-like type or interface from which keys from `KeysUnion` are to be excluded.
 * @template KeysUnion A union of keys that are present in the `ObjectLike` generic, used to exclude keys from the created type.
 * @template ObjectLikeHelper An internal helper. DO NOT CHANGE.
 * @description A stricter version of TS's built-in {@link Omit} utility type.
 *
 * Opposite of {@link StrictPick}.
 *
 * Strict version of {@link LooseOmit}.
 *
 * While there are some good reasons to keep Omit so wide open (see {@link https://github.com/microsoft/TypeScript/issues/30825 TS issue 30825}),
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
 * @see {@link https://typescript.tv/errors/#ts2344 TS 2344}. Type 'string' does not satisfy the constraint 'Record<PropertyKey, any>' (error on the **first** generic parameter).
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
 *
 * **Issue #3 (FIXED in v0.7.1):**
 * Arrays can be passed into `ObjectLike` generic -- there's a rather simple way to change this and it needs to happen soon.
 * **Issue 4:**
 * No autocomplete for `KeysUnion` number and symbol keys -- only for strings.
 * An attempt to fix that will first be conducted in {@link EXPERIMENTAL_LooseOmit}.
 * But there is a case to be made that types should be created for Omit and Pick types (both Loose and Strict varieties) that *ONLY* accepts strings for object keys in the `KeysUnion`.
 * Using numbers as keys is plainly bad practice and using symbols is rare enough that using the wide {@link PropertyKey} type for keys in these utilities -- while strictly more "correct" -- will probably lead to more confusion than it's worth.
 * We shall see...
 * @see
 * Types used under the hood:
 * - Helpers: {@link EmptyObject}, {@link ReturnObjectLikeOrNever};
 * - Built-in TS Utilities: {@link Omit}, {@link PropertyKey}, {@link Record}.
 */
export type StrictOmit<
  ObjectLike extends ReturnObjectLikeOrNever<ObjectLikeHelper>,
  KeysUnion extends keyof ObjectLike,
  ObjectLikeHelper extends object = ReturnObjectLikeOrNever<ObjectLike>
> = Omit<ObjectLike, KeysUnion> extends EmptyObject
  ? EmptyObject
  : Omit<ObjectLike, KeysUnion>;
