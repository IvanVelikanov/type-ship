/**
 * @file A stricter version of the built-in Extract utility type ({@link https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union TS Extract}).
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { StrictExclude } from './strict-exclude';
import type { LooseExtract } from '../loose-builtins/loose-extract';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for LoosePick should come after this line. */

/**
 * @summary Extract from `FullSet` those types that are assignable to `ExtractedSubset`.
 * @template FullSet A type or a union of types from which `ExtractedSubset` types are to be extracted.
 * @template ExtractedSubset A type or a union of types that gets extracted from `FullSet`.
 * @description A stricter version of TS's built-in {@link Extract} utility type.
 *
 * Opposite of {@link StrictExclude}.
 *
 * Stricted version of {@link LooseExtract}
 *
 * Unlike the default {@link Extract}, this one does not allow types that aren't already present in the `FullSet` to be extracted.
 * @example
 * **SUCCESS:**
 * ```
 * import type { StrictExtract } from 'type-ship';
 *
 * type FooBarBazz = 'foo' | 'bar' | 'bazz';
 *
 * type FooBazz = StrictExtract<FooBarBazz, 'foo' | 'bazz'>;
 * ```
 * **Result:**
 * ```
 * type FooBazz = 'foo' | 'bazz';
 * ```
 * @todo
 *
 * **Issue #1:**
 * When `FullSet` is broad (for example, string or number types), StrictExtract collapses down to `never`.
 * ```
 * import type { StrictExtract } from 'type-ship';
 *
 * type CollapsesDownToNever = StrictExtract<string, 'foo' | 'bar'>;
 *
 * const fooAndBarShouldBeAllowed: CollapsesDownToNever = 'foo'; // TS Error 2322: Type 'string' is not assignable to type 'never'.
 * ```
 * The example above should result in the union of `'foo' | 'bar'` -- not `never`.
 * @see
 * Types used under the hood:
 * - Built-in TS utilities: {@link Extract}.
 */
export type StrictExtract<FullSet, ExtractedSubset extends FullSet> = Extract<
  FullSet,
  ExtractedSubset
>;
