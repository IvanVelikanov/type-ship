/**
 * @file A stricter version of the built-in Extract utility type ({@link https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union TS Extract}).
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Need this here for the @link in JSDoc.
import type { StrictExclude } from './strict-exclude';

/**
 * @summary Extract from FullSet those types that are assignable to ExtractedSubset.
 * @template FullSet A type or a union of types from which `ExtractedSubset` types are to be extracted.
 * @template ExtractedSubset A type of a union of types that gets extracted from `FullSet`.
 * @description A stricter version of TS's built-in Extract type. Opposite of {@link StrictExclude}.
 *
 * Unlike the default Extract, this one does not allow types that aren't already present in the `FullSet` to be extracted.
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
 * When `FullSet` is broad (for example, string or number types), StrictExtract collapses down `never`.
 * ```
 * import type { StrictExtract } from 'type-ship';
 *
 * type CollapsesDownToNever = StrictExtract<string, 'foo' | 'bar'>;
 *
 * const fooAndBarShouldBeAllowed: CollapsesDownToNever = 'foo'; // TS Error 2322: Type 'string' is not assignable to type 'never'.
 * ```
 * The example above should result in the union of `'foo' | 'bar'`.
 */
export type StrictExtract<FullSet, ExtractedSubset extends FullSet> = Extract<
  FullSet,
  ExtractedSubset
>;
