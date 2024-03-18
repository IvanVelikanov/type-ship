/**
 * @file Very similar to TS's built-in {@link Pick} utility type (@see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys built-in TS Pick}) but better.
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { LooseOmit } from './loose-omit';
import type { StrictPick } from '../strict-builtins/strict-pick';
import type { EXPERIMENTAL_LooseOmit } from '../EXPERIMENTAL/EXPERIMENAL_loose-omit';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for LoosePick should come after this line. */

import type { LooseAutocomplete } from '../helpers/loose-autocomplete';
import type { EmptyObject } from '../helpers/empty-object';
import type { ReturnObjectLikeOrNever } from '../helpers/return-object-like-or-never';

/**
 * @description Helper type for the {@link LoosePick} utility type.
 * Does more or less the same thing but provides no autocomplete.
 * @template ObjectLike
 * @example @see examples from {@link LoosePick}.
 */
type LoosePickHelper<
  ObjectLike extends Record<PropertyKey, unknown>,
  KeysUnion extends PropertyKey
> = {
  [P in Extract<keyof ObjectLike, KeysUnion>]: ObjectLike[P];
};

/**
 * @summary Construct a type with the properties of `ObjectLike` picked from those in type `KeysUnion`.
 * @template ObjectLike An object-like type or interface from which some keys are to be picked.
 * @template KeysUnion A union of keys that may or may not be present in the ObjectLike generic, used to pick keys from the created type.
 * @template ObjectLikeHelper An internal helper. DO NOT CHANGE.
 * @description Very similar to TS's built-in {@link Pick} utility type (@see {@link https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys built-in TS Pick}) with 3 key differences:
 * - 1. The first generic is limited to object-like types;
 * - 2. In the second generic, the keys to be picked don't necessarily have to extend the keys of `ObjectLike` -- still, loose autocomplete is provided;
 * - 3. If no valid keys are picked, the result is {@link EmptyObject} - not {@link Object}.
 *
 * Opposite of {@link LooseOmit}.
 *
 * Loose version of {@link StrictPick}.
 * @example
 * ```
 * type FooBarBazz = {
 *   foo: string;
 *   bar: string;
 *   bazz: string;
 * };
 *
 * type Foo = LooseOmit<FooBarBazz, 'foo' | 'gabagoobaa'>
 * /*    ___________________________         ^
 *       | No error here but shows |         |
 *       | 'foo' | 'bar' | 'bazz'  | ---------
 *       | for autocomplete.       |
 *       ---------------------------
 * /*
 * ```
 * **Result:**
 * ```
 * type Foo = {
 *   foo: string;
 * };
 * ```
 * @todo
 *
 * **Issue #1:**
 * As of now, this type may not work correctly with Maps or Sets.
 *
 * **Issue #2 (FIXED in v0.7.1):**
 * Arrays can be passed into `ObjectLike` generic -- there's a rather simple way to change this and it needs to happen soon.
 *
 * **Issue 3:**
 * No autocomplete for `KeysUnion` number and symbol keys -- only for strings.
 * An attempt to fix that will first be conducted in {@link EXPERIMENTAL_LooseOmit}.
 * But there is a case to be made that types should be created for Omit and Pick types (both Loose and Strict varieties) that *ONLY* accept strings for object keys in the `KeysUnion`.
 * Using numbers as keys is plainly bad practice and using symbols is rare enough that using the wide {@link PropertyKey} type for keys in these utilities -- while strictly more "correct" -- will probably lead to more confusion than it's worth.
 * We shall see...
 * @see
 * Types used under the hood:
 * - Internal: {@link LoosePickHelper};
 * - Helpers: {@link LooseAutocomplete}, {@link EmptyObject}, {@link ReturnObjectLikeOrNever};
 * - Built-in TS Utilities: {@link PropertyKey}, {@link Record}.
 */
export type LoosePick<
  ObjectLike extends ReturnObjectLikeOrNever<ObjectLikeHelper>,
  KeysUnion extends LooseAutocomplete<keyof ObjectLike, PropertyKey>,
  ObjectLikeHelper extends object = ReturnObjectLikeOrNever<ObjectLike>
> = LoosePickHelper<
  ObjectLike,
  KeysUnion extends PropertyKey ? KeysUnion : PropertyKey
> extends EmptyObject
  ? EmptyObject
  : LoosePickHelper<
      ObjectLike,
      KeysUnion extends PropertyKey ? KeysUnion : PropertyKey
    >;
