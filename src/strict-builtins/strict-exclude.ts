/**
 * @file A stricter version of the built-in Exclude utility type ({@link https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers TS Exclude}).
 */

/* eslint-disable @typescript-eslint/no-unused-vars -- Need this for JSDoc @link tags. */
import type { StrictExtract } from './strict-extract';
import type { LooseExclude } from '../loose-builtins/loose-exclude';
/* eslint-enable @typescript-eslint/no-unused-vars -- Types actually used for LoosePick should come after this line. */

/**
 * @summary Exclude from `FullSet` those types that are assignable to `ExcludedSubset`.
 * @template FullSet A type or a union of types from which `ExcludedSubset` types are to be excluded.
 * @template ExcludedSubset A type or a union of types that gets excluded from `FullSet`.
 * @description A stricter version of TS's built-in {@link Exclude} utility type.
 *
 * Opposite of {@link StrictExtract}.
 *
 * Stricter version of {@link LooseExclude}.
 *
 * Unlike the default {@link Exclude}, this one does not allow types that aren't already present in the `FullSet` to be excluded.
 * @example
 * **SUCCESS:**
 * ```
 * import type { StrictExclude } from 'type-ship';
 *
 * type FooBarBazz = 'foo' | 'bar' | 'bazz';
 *
 * type Bar = StrictExclude<FooBarBazz, 'foo' | 'bazz'>;
 * ```
 * **Result:**
 * ```
 * type Bar = 'bar';
 * ```
 * @todo
 *
 * **Issue #1:**
 * When `FullSet` is broad (for example, string or number types), StrictExclude gets defeated and collapses down to the provided `FullSet` type.
 * ```
 * import type { StrictExclude } from 'type-ship';
 *
 * type CollapsesDownToString = StrictExclude<string, 'foo'>;
 * type CollapsesDownToNumber = StrictExclude<number, 100>;
 *
 * const shouldNotBeAllowed: CollapsesDownToString = 'foo';
 * const shouldNotBeAllowedEither: CollapsesDownToNumber = 100;
 * ```
 * The examples above should result in the inverse of Union, wherein anything is allowed EXCEPT for the specific values provided for the StrictExclude's `ExcludedSubset`.
 * @see
 * Types used under the hood:
 * - Built-in TS utilities: {@link Exclude}.
 */
export type StrictExclude<FullSet, ExcludedSubset extends FullSet> = Exclude<
  FullSet,
  ExcludedSubset
>;
