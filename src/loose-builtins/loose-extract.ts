/**
 * @file Same as the built-in Extract utility type ({@link https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union TS Extract})
 * but with loose autocomplete.
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { LooseExclude } from './loose-exclude';
import type { StrictExtract } from '../strict-builtins/strict-extract';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for LoosePick should come after this line. */

import type { LooseAutocomplete } from '../helpers/loose-autocomplete';

/**
 * @summary Extract from `FullSet` those types that are assignable to `ExtractedSubset`.
 * @template FullSet A type or a union of types from which `ExtractedSubset` types are to be extracted.
 * @template ExtractedSubset A type or a union of types that gets extracted from `FullSet`.
 * @description Same as TS's built-in {@link Extract} utility type but with loose autocomplete.
 *
 * Opposite of {@link LooseExclude}.
 *
 * Loose version of {@link StrictExtract}.
 * @example
 * **SUCCESS:**
 * ```
 * import type { LooseExtract } from 'type-ship';
 *
 * type FooBarBazz = 'foo' | 'bar' | 'bazz';
 *
 * type FooBazz = LooseExtract<FooBarBazz, 'foo' | 'bazz' | 'somethingrandom'>;
 * /*        ___________________________                     ^
 *           | No error here but shows |                     |
 *           | 'foo' | 'bar' | 'bazz'  | ---------------------
 *           | for autocomplete.       |
 *           ---------------------------
 * /*
 * ```
 * **Result:**
 * ```
 * type FooBazz = 'foo' | 'bazz';
 * ```
 * @todo
 *
 * **Issue #1:**
 *
 * When `FullSet` is broad (for example, string or number types), LooseExtract collapses down to `never`.
 * ```
 * import type { LooseExtract } from 'type-ship';
 *
 * type CollapsesDownToNever = LooseExtract<string, 'foo' | 'bar'>;
 *
 * const fooAndBarShouldBeAllowed: CollapsesDownToNever = 'foo'; // TS Error 2322: Type 'string' is not assignable to type 'never'.
 * ```
 * The example above should result in the union of `'foo' | 'bar'`.
 *
 * **Issue #2:**
 *
 * Due to the nature of {@link LooseAutocomplete}, `FullSet` in this type has to be
 * restricted to {@link PropertyKey} type.
 *
 * The problem is that *technically* the original TS's {@link Extract} places no such limitations.
 *
 * One of two things needs to happen for this issue to be considered resolved:
 * - Find a way to include other types while also providing loose autocomplete where possible;
 * - Deliberately limit this type (and probably {@link StrictExtract} too) to `string` or just leave the limitation
 * to PropertyKey but figure out loose autocomplete for numbers and symbols too. It just makes more sense to use this
 * type for extracting out of simpler unions rather than for something like unions of object-like types.
 * But we shall see.
 * @see
 * Types used under the hood:
 * - Helpers: {@link LooseAutocomplete}.
 * - Built-in TS utilities: {@link PropertyKey}, {@link Exclude}.
 */
export type LooseExtract<
  FullSet extends PropertyKey,
  ExtractedSubset extends LooseAutocomplete<FullSet, PropertyKey>
> = Extract<FullSet, ExtractedSubset>;
