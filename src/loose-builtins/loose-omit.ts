/**
 * @file Loose version of {@link StrictOmit}.
 * Same logic as {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys built-in TS Omit}
 * but limited to object-like types and also provides loose autocomplete.
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { StrictOmit } from '../strict-builtins/strict-omit';
import type { EXPERIMENTAL_LooseOmit } from '../EXPERIMENTAL/EXPERIMENAL_loose-omit';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for LooseOmit should come after this line. */

import type { EmptyObject } from '../helpers/empty-object';
import type { LooseAutocomplete } from '../helpers/loose-autocomplete';
import type { ReturnObjectLikeOrNever } from '../helpers/return-object-like-or-never';

/**
 * @summary Construct a type with the properties of `ObjectLike` except for those in type `KeysUnion`.
 * @template ObjectLike An object-like type or interface from which keys from `KeysUnion` are to be excluded.
 * @template KeysUnion A union of keys to be excluded from `ObjectLike`.
 * @template ObjectLikeHelper An internal helper. DO NOT CHANGE.
 * @description Same logic as {@link Omit} (see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys built-in TS Omit})
 * but limited to object-like types and also provides loose autocomplete via {@link LooseAutocomplete}.
 *
 * Loose version of {@link StrictOmit}.
 *
 * **Use-cases**:
 * - Creating a new type or interface which omits one or more keys from another object-like type or interface -
 * arbitrary keys can be used for selection.
 * @example
 * ```
 * type FooBarBazz = {
 *   foo: string;
 *   bar: string;
 *   bazz: string;
 * };
 *
 * type BarBazz = LooseOmit<FooBarBazz, 'foo' | 'gabagoobaa'>
 * /*        ___________________________         ^
 *           | No error here but shows |         |
 *           | 'foo' | 'bar' | 'bazz'  | ---------
 *           | for autocomplete.       |
 *           ---------------------------
 * /*
 * ```
 * **Result:**
 * ```
 * type BarBazz = {
 *   bar: string;
 *   bazz: string;
 * };
 * ```
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
 *
 * **Issue 4:**
 * No autocomplete for `KeysUnion` number and symbol keys -- only for strings.
 * An attempt to fix that will first be conducted in {@link EXPERIMENTAL_LooseOmit}.
 * But there is a case to be made that types should be created for Omit and Pick types (both Loose and Strict varieties) that *ONLY* accept strings for object keys in the `KeysUnion`.
 * Using numbers as keys is plainly bad practice and using symbols is rare enough that using the wide {@link PropertyKey} type for keys in these utilities -- while strictly more "correct" -- will probably lead to more confusion than it's worth.
 * We shall see...
 * @see
 * Types used under the hood:
 * - Helpers: {@link LooseAutocomplete}, {@link EmptyObject}, {@link ReturnObjectLikeOrNever};
 * - Built-in TS Utilities: {@link Omit}, {@link PropertyKey}, {@link Record}.
 */
export type LooseOmit<
  ObjectLike extends ReturnObjectLikeOrNever<ObjectLikeHelper>,
  KeysUnion extends LooseAutocomplete<keyof ObjectLike, PropertyKey>,
  ObjectLikeHelper extends object = ReturnObjectLikeOrNever<ObjectLike>
> = Omit<
  ObjectLike,
  KeysUnion extends PropertyKey ? KeysUnion : PropertyKey
> extends EmptyObject
  ? EmptyObject
  : Omit<ObjectLike, KeysUnion extends PropertyKey ? KeysUnion : PropertyKey>;
