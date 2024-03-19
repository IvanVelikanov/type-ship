/**
 * @file Same as the built-in Exclude utility type ({@link https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers TS Extract})
 * but with loose autocomplete.
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { LooseExtract } from './loose-extract';
import type { StrictExclude } from '../strict-builtins/strict-exclude';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for LoosePick should come after this line. */

import type { LooseAutocomplete } from '../helpers/loose-autocomplete';

/**
 * @summary Exclude from `FullSet` those types that are assignable to `ExcludedSubset`.
 * @template FullSet A type or a union of types from which `ExcludedSubset` types are to be excluded.
 * @template ExcludedSubset A type or a union of types that gets excluded from `FullSet`.
 * @description Same as TS's built-in {@link Exclude} utility type but with loose autocomplete.
 *
 * Opposite of {@link LooseExtract}.
 *
 * Loose version of {@link StrictExclude}.
 * @example
 * **SUCCESS:**
 * ```
 * import type { LooseExclude } from 'type-ship';
 *
 * type FooBarBazz = 'foo' | 'bar' | 'bazz';
 *
 * type Bar = LooseExclude<FooBarBazz, 'foo' | 'bazz' | 'somethingrandom>;
 * /*        ___________________________                 ^
 *           | No error here but shows |                 |
 *           | 'foo' | 'bar' | 'bazz'  | -----------------
 *           | for autocomplete.       |
 *           ---------------------------
 * /*
 * ```
 * **Result:**
 * ```
 * type Bar = 'bar';
 * ```
 * @todo
 *
 * **Issue #1:**
 * When `FullSet` is broad (for example, string or number types), LooseExclude gets defeated and collapses down to the provided `FullSet` type.
 * ```
 * import type { LooseExclude } from 'type-ship';
 *
 * type CollapsesDownToString = LooseExclude<string, 'foo'>;
 * type CollapsesDownToNumber = LooseExclude<number, 100>;
 *
 * const shouldNotBeAllowed: CollapsesDownToString = 'foo';
 * const shouldNotBeAllowedEither: CollapsesDownToNumber = 100;
 * ```
 * The examples above should result in the inverse of Union, wherein anything is allowed EXCEPT for the specific values provided for the LooseExclude's `ExcludedSubset`.
 * **Issue #2:**
 *
 * Due to the nature of {@link LooseAutocomplete}, `FullSet` in this type has to be
 * restricted to {@link PropertyKey} type.
 *
 * The problem is that *technically* the original TS's {@link Exclude} places no such limitations.
 *
 * One of two things needs to happen for this issue to be considered resolved:
 * - Find a way to include other types while also providing loose autocomplete where possible;
 * - Deliberately limit this type (and probably {@link StrictExclude} too) to `string` or just leave the limitation
 * to PropertyKey but figure out loose autocomplete for numbers and symbols too. It just makes more sense to use this
 * type for extracting out of simpler unions rather than for something like unions of object-like types.
 * But we shall see.
 * @see
 * Types used under the hood:
 * - Helpers: {@link LooseAutocomplete}.
 * - Built-in TS utilities: {@link PropertyKey}, {@link Exclude}.
 */
export type LooseExclude<
  FullSet extends PropertyKey,
  ExcludedSubset extends LooseAutocomplete<FullSet, PropertyKey>
> = Exclude<FullSet, ExcludedSubset>;
