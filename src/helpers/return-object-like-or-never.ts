/**
 * @file Returns a replica of the provided type; or `never` if the provided type is not object-like.
 */

import type { Replicate } from './replicate';

/**
 * @summary Returns a replica of the provided type; or `never` if the provided type is not object-like.
 * @template ObjectExtendable
 * @description What I mean by 'object-like' -- in this context, at least, is
 * something that, commonsensically, would be represented in JS with curly braces.
 * So then, transposing that logic to TypeScript, 'object-like' is what is normally
 * represented with a basic-looking interface or an interface-looking type.
 *
 * Unfortunately, the `Object` type includes absolutely everything except for `null` and `undefined`.
 *
 * Meanwhile, the `object` type -- while better than it's capitalized counterpart -- still accepts `Array`s, which is acceptable sometimes -- but very much not acceptable or even expected most of the time.
 *
 * This type is an attempt to fix that. It is reduces to `never` if you pass an array (or anything else) into the `ObjectExtendable` generic and it returns the passed type (or a replica in the form of a type if you pass an interface) if what you pass qualifies as 'object-like'.
 * @example
 * ```
 * import { ReturnObjectLikeOrNever } from 'type-ship';
 *
 * interface TestInterface {
 *   foo: any;
 * }
 *
 * type TestType = {
 *   bar: any;
 * };
 *
 * type TestArray = ['bazz'];
 *
 * type IsTestInterfaceObjectLike = ReturnObjectLikeOrNever<TestInterface>;
 *
 * type IsTestTypeObjectLike = ReturnObjectLikeOrNever<TestType>;
 *
 * type IsTestArrayObjectLike = ReturnObjectLikeOrNever<TestArray>;
 * ```
 * **Result:**
 * ```
 * type IsTestInterfaceObjectLike = {
 *   foo: any;
 * } // A-Okay!
 *
 * type IsTestTypeObjectLike = {
 *   bar: any;
 * } // All good!
 *
 * type IsTestArrayObjectLike = never; // Arrays get filtered out!
 * ```
 * @todo
 * I really hope that there's a way to make a *type* --
 * not a type *check* that would do the same thing.
 * Meaning that, instead of filtering out arrays by reducing the
 * type to never, having some neat and simple,
 * like `Record<PropertyKey, unknown>`, from which we can extend
 * during type-checks.
 *
 * The problem with `Record<PropertyKey, unknown>` (which is also the
 * reason that this type needed to be created) is that it
 * only accepts object-like *types* but disallows *interfaces*.
 * @see
 * Types used under the hood:
 * - Helpers: {@link Replicate};
 * - Built-in TS utilities: {@link Record}.
 */
export type ReturnObjectLikeOrNever<ObjectExtendable extends object> =
  ObjectExtendable extends Record<PropertyKey, unknown>
    ? ObjectExtendable
    : Replicate<ObjectExtendable> extends Record<PropertyKey, unknown>
    ? Replicate<ObjectExtendable>
    : never;
